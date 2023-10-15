import { Navigate } from 'react-router-dom';
import { getAccessToken } from '../../utils/session';

const PrivateRoute = ({ children }) => {
    const isLogin = getAccessToken()

    return isLogin ? children : <Navigate to='/login' />
}
export default PrivateRoute;