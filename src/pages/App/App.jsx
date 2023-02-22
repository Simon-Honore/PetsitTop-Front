import { Routes, Route } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MyProfile from '../MyProfile/MyProfile';
import Identification from '../Identification/Identification';
import './App.scss';

function App() {
  const logged = true;

  return (
    <div className="App">
      <Header isLogged={logged} />
      <Routes>
        <Route path="/identification" element={<Identification />} />
        <Route path="/mon_profil" element={<MyProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
