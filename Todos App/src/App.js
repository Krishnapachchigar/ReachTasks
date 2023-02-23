import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Form from './Components/Form'
import Reform from './Components/Reform';
import FormHook from './Components/Task7/FormHook'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Form />} />
        <Route path='/form' element={<Reform />} />
        <Route path='/formhook' element={<FormHook />} />
      </Routes>
    </div>
  );
}

export default App