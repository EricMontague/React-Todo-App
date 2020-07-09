import { v4 as uuidv4 } from "uuid";

const initialTodos = [
  { id: uuidv4(), title: "Post on social media", completed: false },
  {
    id: uuidv4(),
    title: "Turn off the air conditioner.",
    completed: false
  },
  {
    id: uuidv4(),
    title: "Change the car's engine oil",
    completed: false
  }
];

export default initialTodos;
