import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AddCategory from './components/AddCategory';
import AddLocation from './components/AddLocation';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Home from './components/Home';
import Locations from './components/Locations';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import Notification from './components/common/Notification';

function App() {
  const { isActive, message, severity } = useSelector(
    state => state.notifications
  );

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

      <Notification open={isActive} severity={severity} message={message} />
    </Router>
  );
}

export default App;
