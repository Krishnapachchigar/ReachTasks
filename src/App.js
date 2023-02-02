import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUS';
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';
import NewProduct from './components/Newproduct';

function App() {

  return (
    <div className='App'>
      <>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus'>
            <Route index element={<AboutUs />} />
            <Route path=':id' element={<ProductList/>}/>
            <Route path='new' element={<NewProduct />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
