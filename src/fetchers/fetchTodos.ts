import axios from "axios";
import { Todo } from "../models/Todo";


export const fetchTodos = () => {
    return axios
      .get(
        "https://gggg-72286-default-rtdb.europe-west1.firebasedatabase.app/.json?api_key=AIzaSyC3q5ipTFohW6Y_r0IzGTgHYpWgvnaNeNY"
      )
      .then((res) => res.data);
  };
  
  export const putTodos = (data: Todo[]) => {
    return axios
      .put(
        "https://gggg-72286-default-rtdb.europe-west1.firebasedatabase.app/.json?api_key=AIzaSyC3q5ipTFohW6Y_r0IzGTgHYpWgvnaNeNY",
        data
      )
      .then((res) => res.data);
  };
  
  