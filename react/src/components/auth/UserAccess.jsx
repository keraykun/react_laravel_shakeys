
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function UserAccess({role}){
    const navigate = useNavigate
    switch (role) {
        case 'admin':
            return <Navigate to="/admin/profile"/>
        case 'user':
            return <Navigate to="/user/profile"/>
        default:
            return <Navigate to="/login" />
    }
}
export default UserAccess
