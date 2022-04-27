import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AddCategory from './components/AddCategory';
import AddLocation from './components/AddLocation';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Home from './components/Home';
import Locations from './components/Locations';
import Nav from './components/Nav';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/add-location" element={<AddLocation />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
