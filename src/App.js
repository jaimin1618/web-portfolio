import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// components
import { AppLayout } from "./components/AppLayout";
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';

export default function App() {
  return (
    <Router>
      <div className='App font-mont'>
        <AppLayout>
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/contact' element={ <Contact /> }/>
            <Route path='/projects' element={ <Projects /> }/>
          </Routes>
        </AppLayout>
      </div>
    </Router>
  );
}