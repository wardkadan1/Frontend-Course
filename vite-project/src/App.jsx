import "./App.css";
import Lay from "./components/task/Lay";
import Task from "./components/task/Task";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Lay />,
    children:[
      {
        index:true,
        element:<Home/>
      }
    ]
  },
]);

function App() {
  return (
    <>
      <Task />
    </>
  );
}

export default App;
