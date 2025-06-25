import { createBrowserRouter } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import App from "../App";
import AddStudent from "../pages/AddStudent";
import StudentList from "../pages/StudentList";
import ViewProfile from "../pages/ViewProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: (
        [
            {
                path: "/",
                element: <Dashboard/>
            },
            {
                path: "/addStudent",
                element: <AddStudent/>
            },
            {
                path: "/studentList",
                element: <StudentList/>
            },
            {
                path: "/viewProfile/:id",
                element: <ViewProfile/>
            }
        ]
    )
  },
  
]);

export default router;
