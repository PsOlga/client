
import { Route, Routes } from 'react-router-dom';


import Header from './header/index.jsx';
import Footer from './footer/index.jsx';
import './App.css';
import HomePage from './pages/HomePage';
import CategoriesAll from './pages/CategotiesAll/index.jsx';

function App() {
  return (
  

      <div className="App">
        <Header/>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages/HomePage" element={<HomePage />} />
          <Route path="/pages/CategoriesAll" element={<CategoriesAll />} />
          {/* <Route path="/cart" element={} /> */}
        </Routes>


        <Footer/>
      </div>

 
  );
}

export default App;
