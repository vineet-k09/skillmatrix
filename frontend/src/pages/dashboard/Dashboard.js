// import { Navigate } from "react-router-dom";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";
import TeacherDashboard from "./TeacherDashboard";
// import ErrorPage from "../ErrorPage";
// all imports r usefull later on

export default function Dashboard() {
    // const user = JSON.parse(localStorage.getItem("user"));

    // dont remove the below code 
    
    // if (!user) {
    //     return <Navigate to='/login' />
    // }
    // switch (user.role) {
    //     case "student":
    //         return <StudentDashboard />;
    //     case "admin":
    //         return <AdminDashboard />;
    //     case "teacher":
    //         return <TeacherDashboard />;
    //     default:
    //         return <ErrorPage />;
    // }

    return (
        <>
            {/* //remove the below code later */}
            <p>Later on when login is fixed only one of them will be shown based on the 'user'</p>
            <StudentDashboard />
            <AdminDashboard />
            <TeacherDashboard />
        </>
    )
}
// so maybe this page points to student, admin, and teachers dashboard based on whos login

// localStorage.setItem("user","student")
// localStorage.setItem("user","teacher")
// localStorage.setItem("user","admin")
// localStorage.setItem("user", JSON.stringify({ role: "student", name: "Vineet" }));