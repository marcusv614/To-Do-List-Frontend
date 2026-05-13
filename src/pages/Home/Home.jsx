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
  const [editingTask, setEditingTask] = useState(null);
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

  const saveTask = async (taskTitle) => {
    const taskData = {
      title: taskTitle,
      completed: editingTask?.completed ?? false,
    };

    try {
      if (editingTask) {
        await putTask(editingTask.id, taskData);
        setEditingTask(null);
      } else {
        await postTask(taskData);
      }

      await loadTasks();
    } catch (error) {
      console.error("Error saving task: ", error);
    }
  };

  const removeTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      await loadTasks();

      if (editingTask?.id === taskId) {
        setEditingTask(null);
      }
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
      <TaskForm
        key={editingTask?.id ?? "new-task"}
        editingTask={editingTask}
        onCancelEdit={() => setEditingTask(null)}
        onSaveTask={saveTask}
      />
      <TasksList
        tasksArray={tasksArray}
        editTask={setEditingTask}
        removeTask={removeTask}
        moveTaskUp={moveTaskUp}
        moveTaskDown={moveTaskDown}
        taskRefs={taskRefs}
      />
    </main>
  );
};

export { Home };
