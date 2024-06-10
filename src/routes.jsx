import Quiz from "./pages/Quiz";
import StudentOrTeacher from "./pages/StudentOrTeacher";
import Teacher from "./pages/Teacher";

export const router = [
    {
        path: '/',
        element: <StudentOrTeacher/>
    },
    {
        path: '/teacher',
        element: <Teacher/>
    },
    {
        path: '/quiz',
        element: <Quiz/>
    },
]