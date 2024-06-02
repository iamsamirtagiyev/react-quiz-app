import AddQuiz from "./components/Modals/AddQuiz";
import Login from "./components/Modals/Login";
import Quiz from "./components/Modals/Quiz";
import SendEmail from "./components/Modals/SendEmail";
import SignUp from "./components/Modals/SignUp";
import Student from "./components/Modals/Student";

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
        name: 'add-quiz',
        element: AddQuiz
    },
    {
        name: 'student',
        element: Student
    },
    {
        name: 'quiz',
        element: Quiz
    },
]