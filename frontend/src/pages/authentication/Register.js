import { useState } from "react"
import { Link } from "react-router-dom"

export default function Regitser() {
    const [user, setUser] = useState('student')

    function changeUser() {
        user === 'student' ? setUser('teacher') : user === 'teacher' ? setUser('student') : setUser('teacher')
    }
    return (
        <>
            <div>
                <button onClick={changeUser}>{user === 'student' ? 'Teacher Regitser' : 'Student Regitser'}</button>
                {user === 'student' && <StudentRegitser />}
                {user === 'teacher' && <TeacherRegitser />}
                <p>Already registered?</p>
                <Link to='/auth/login'>login</Link>
            </div>
        </>
    )
}

export function StudentRegitser() {
    return (
        <p>StudentRegitser here</p>
    )
}
export function TeacherRegitser() {
    return (
        <p>TeacherRegitser here</p>
    )
}