import logo from './logo.svg';
import './App.css';
import AddReview from './components/AddReview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddReview/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
