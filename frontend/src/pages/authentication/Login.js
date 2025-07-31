import { useState } from "react"

export default function Login() {
    const [user, setUser] = useState('student')

    function changeUser(){
        user === 'student' ? setUser('teacher') : user === 'teacher' ? setUser('student') : setUser('teacher')
    }
    return (
        <>
            <div>
                <button onClick={changeUser}>{user==='student'?'Teacher Login':'Student Login'}</button>
                {user === 'student' && <StudentLogin />}
                {user === 'teacher' && <TeacherLogin />}
                <AdminLogin />
            </div>
        </>
    )
}

export function StudentLogin() {
    return (
        <p>StudentLogin here</p>
    )
}
export function TeacherLogin() {
    return (
        <p>TeacherLogin here</p>
    )
}
export function AdminLogin() {
    return (
        <p>Are u an admin?
            Login here
        </p>
    )
}