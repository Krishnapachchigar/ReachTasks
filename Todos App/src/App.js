import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Form from './Components/Form'
import Reform from './Components/Reform';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Form />} />
        <Route path='/form' element={<Reform />} />
      </Routes>
    </div>
  );
}

export default App