import Navbar from "./components/general/Navbar";
import { Routes, Route} from "react-router-dom";
import MainBook from './components/books/MainBook'
import MainCategory from './components/categories/MainCategory'
import {Provider} from 'react-redux'
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Navbar />     
      <Routes>
          <Route path="/" element={<MainBook />}></Route>
          <Route path="/category" element={<MainCategory />}></Route>
      </Routes> 
    </Provider>
  );
}

export default App;
