import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../pages/nofound';
import Login from '../pages/login';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import ProductPage from '../pages/productPage';

function Router() {
  // const user = getProptechLocalStorageUserData()
  // const { isLoading } = useSelector(state => state.loader);

  return (
    <BrowserRouter>
      {/* {isLoading ? <Loader /> : null} */}
      <Routes >
        <Route path="/" exact element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/login" exact element={<PublicRoute><Login /></PublicRoute>} />
        <Route path='/product-page' element={<PrivateRoute><ProductPage /></PrivateRoute>} />
        <Route path='*' element={<PrivateRoute><NotFound /></PrivateRoute>} />
      </Routes >
    </BrowserRouter >
  );
}

export default Router;
