import App from "./App.jsx";
import Inbox from "./Inbox.jsx";
import ThisWeek from "./ThisWeek.jsx";
import Today from "./Today.jsx";
import Project from "./Project.jsx"
import { Navigate } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/inbox" replace />
            },
            {   
                path: "/inbox",
                element: <Inbox/>
            },
            {
                path: "/today",
                element: <Today/>
            },
            {
                path: "/this-week",
                element: <ThisWeek/>
            },
            {
                path: "/my-projects/:projectId",
                element: <Project/>
            }
        ]
    }
]

export default routes;