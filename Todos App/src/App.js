import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import SignUP from './SignUP';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<SignUP />} />
      </Routes>
    </div>
  );
}

export default App