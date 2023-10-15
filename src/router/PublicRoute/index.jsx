import { Navigate } from 'react-router-dom';
import { getAccessToken } from '../../utils/session';

// For public user
const PublicRoute = ({ children }) => {
    const isLogin = getAccessToken()

    return !isLogin ? children : <Navigate to='/dashboard' />
}
export default PublicRoute;