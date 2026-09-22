import { createBrowserRouter } from "react-router-dom";
import { UserList } from "../pages/UserList";
import { AddUser } from "../pages/AddUser";

export const routes = createBrowserRouter([
    {path:"",element:<UserList/>},
    {path:"add",element:<AddUser/>}

])