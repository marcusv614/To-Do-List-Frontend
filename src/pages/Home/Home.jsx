import { TasksList, TaskForm } from "../../components";
import { useCallback, useEffect, useRef, useState } from "react";
import style from "./Home.module.css";
import {
  deleteTask,
  getTasks,
  postTask,
  putTask,
} from "../../service/TaskService";

const Home = () => {
  const [tasksArray, setTasksArray] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const taskRefs = useRef({});

  const animateTaskMovement = (previousPositions) => {
    requestAnimationFrame(() => {
      Object.entries(taskRefs.current).forEach(([taskId, element]) => {
        const previousPosition = previousPositions[taskId];

        if (!element || !previousPosition) {
          return;
        }

        const currentPosition = element.getBoundingClientRect();
        const movement = previousPosition.top - currentPosition.top;

        if (movement === 0) {
          return;
        }

        element.animate(
          [
            { transform: `translateY(${movement}px)` },
            { transform: "translateY(0)" },
          ],
          {
            duration: 260,
            easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
          }
        );
      });
    });
  };

  const getTaskPositions = () => {
    return Object.entries(taskRefs.current).reduce((positions, [taskId, element]) => {
      if (element) {
        positions[taskId] = element.getBoundingClientRect();
      }

      return positions;
    }, {});
  };

  const loadTasks = useCallback(async () => {
    try {
      const responseArray = await getTasks();
      setTasksArray(responseArray.data);
    } catch (error) {
      console.error("Tasks not found", error);
    }
  }, []);

  const createTask = async (taskTitle) => {
    const taskData = {
      title: taskTitle,
      completed: false,
    };

    try {
      await postTask(taskData);
      await loadTasks();
    } catch (error) {
      console.error("Error creating task: ", error);
    }
  };

  const updateTaskTitle = async (task, taskTitle) => {
    const taskData = {
      ...task,
      title: taskTitle,
    };

    try {
      await putTask(task.id, taskData);
      setTasksArray((currentTasks) =>
        currentTasks.map((currentTask) =>
          currentTask.id === task.id ? taskData : currentTask
        )
      );
      setEditingTaskId(null);
    } catch (error) {
      console.error("Error updating task: ", error);
    }
  };

  const removeTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasksArray((currentTasks) =>
        currentTasks.filter((task) => task.id !== taskId)
      );

      if (editingTaskId === taskId) {
        setEditingTaskId(null);
      }

      await loadTasks();
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };

  const moveTaskUp = (taskIndex) => {
    if (taskIndex === 0) return;

    const previousPositions = getTaskPositions();
    const updatedTasks = [...tasksArray];

    [updatedTasks[taskIndex], updatedTasks[taskIndex - 1]] = [
      updatedTasks[taskIndex - 1],
      updatedTasks[taskIndex],
    ];

    setTasksArray(updatedTasks);
    animateTaskMovement(previousPositions);
  };

  const moveTaskDown = (taskIndex) => {
    if (taskIndex === tasksArray.length - 1) return;

    const previousPositions = getTaskPositions();
    const updatedTasks = [...tasksArray];

    [updatedTasks[taskIndex], updatedTasks[taskIndex + 1]] = [
      updatedTasks[taskIndex + 1],
      updatedTasks[taskIndex],
    ];

    setTasksArray(updatedTasks);
    animateTaskMovement(previousPositions);
  };

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <main className={style.Home}>
      <TaskForm onCreateTask={createTask} />
      <TasksList
        tasksArray={tasksArray}
        cancelEdit={() => setEditingTaskId(null)}
        editingTaskId={editingTaskId}
        editTask={setEditingTaskId}
        removeTask={removeTask}
        moveTaskUp={moveTaskUp}
        moveTaskDown={moveTaskDown}
        updateTaskTitle={updateTaskTitle}
        taskRefs={taskRefs}
      />
    </main>
  );
};

export { Home };
