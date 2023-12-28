import './App.css';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Projects } from './Pages/Projects';
import { Routes ,Route} from 'react-router-dom';
import { Skills } from './Pages/Skills';
import { ContactMe } from './Pages/ContactMe';

function App() {
  return (
    <div className="wrapper ">
    <div className='container'>
    <Navbar/>
      <Routes>
      <Route path='/' element={ <HeroSection/>}/>
        <Route path='/projects' element={<Projects/>} />
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/contactme' element={<ContactMe/>}/>
      </Routes>
     
    </div>
   
    </div>
  );
}

export default App;
