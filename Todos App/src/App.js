import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Reform from './Reform'
import Form from './Form'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App