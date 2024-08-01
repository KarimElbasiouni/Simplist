import App from "./App.jsx";
import Inbox from "./Inbox.jsx";
import ThisWeek from "./ThisWeek.jsx";
import Today from "./Today.jsx";


const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
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
            }
        ]
    }
]

export default routes;