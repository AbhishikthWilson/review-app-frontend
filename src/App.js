import logo from './logo.svg';
import './App.css';
import AddReview from './components/AddReview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewReview from './components/ViewReview';
import SearchReview from './components/SearchReview';
import DeleteReview from './components/DeleteReview';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddReview/>}/>
    <Route path='/view' element={<ViewReview/>}/>
    <Route path='/search' element={<SearchReview/>}/>
    <Route path='/delete' element={<DeleteReview/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
