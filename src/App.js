import Router from './router';
import SnackBar from './components/SnackBar';
import './App.css';
import { Provider } from 'react-redux';
import { Store } from './store/configureStore';

// Redux store
function App() {
  return (
    <Provider store={Store}>
        <SnackBar />
        <Router />
      </Provider>
  );
}

export default App;
