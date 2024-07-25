import logo from './logo.svg';
import './App.css';
import Header from './header.js'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ViewPage from './ViewPage.js';
import EditPage from './EditPage.js';



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/View' element ={<ViewPage/>}/>
      <Route path='/edit' element ={<EditPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
