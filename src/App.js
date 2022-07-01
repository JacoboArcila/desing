import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyles from './globalStyles';

import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalStyles />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
