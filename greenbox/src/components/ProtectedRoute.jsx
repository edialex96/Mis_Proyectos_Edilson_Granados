import {Navigate, useLocation, Outlet} from 'react-router-dom'
export const ProtectedRoute = ({user, children, redirecTo="/login"}) => {
    const { state } = useLocation();
    if(!user){
        return  state?.logged ? children : <Navigate to={redirecTo} />
    }

    return <Outlet />

}