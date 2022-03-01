import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// components
import { AppLayout } from "./components/AppLayout";
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className='App font-mont'>
        <AppLayout>
          <Routes>
            <Route path='/web-portfolio' element={ <Home /> }/>
            <Route path='/web-portfolio/contact' element={ <Contact /> }/>
            <Route path='/web-portfolio/projects' element={ <Projects /> }/>
          </Routes>
        </AppLayout>
      </div>
    </Router>
  );
}