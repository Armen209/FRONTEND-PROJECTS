import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/general/layout";
import { SignUp } from "../pages/general/signup/signup";
import { SignIn } from "../pages/general/signin/signin";

export const router = createBrowserRouter([
    {path:"/", element:<Layout/>,
        children:[
            {path:"",element:<SignUp/>},
            {path:"login",element:<SignIn/>}
        ] 
    }
])