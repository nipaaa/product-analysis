
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import QnA from './components/QnA/QnA';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/review' element={<Review></Review>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/QnA' element={<QnA></QnA>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
