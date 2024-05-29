import Login from "./components/Modals/Login";
import SendEmail from "./components/Modals/SendEmail";
import SignUp from "./components/Modals/SignUp";
import Update from "./components/Modals/Update";

export const modals = [
    {
        name: 'login',
        element: Login
    },
    {
        name: 'signup',
        element: SignUp
    },
    {
        name: 'send-email',
        element: SendEmail
    },
    {
        name: 'update',
        element: Update
    },
]