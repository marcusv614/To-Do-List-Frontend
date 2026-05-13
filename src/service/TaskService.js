import { Api } from "./api";

export const getTasks = () => {
  return Api.get("");
};

export const postTask = (task) => {
  return Api.post("", task);
};

export const putTask = (id, task) => {
  return Api.put(`/${id}`, task);
};

export const deleteTask = (id) => {
  return Api.delete(`/${id}`);
};
