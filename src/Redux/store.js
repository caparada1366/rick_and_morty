import { createStore } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import favsReducer from './reducer';


const store = createStore(
  favsReducer
  );
  
  export default store;