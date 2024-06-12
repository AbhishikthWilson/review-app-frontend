import logo from './logo.svg';
import './App.css';
import AddReview from './components/AddReview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewReview from './components/ViewReview';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddReview/>}/>
    <Route path='/view' element={<ViewReview/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
