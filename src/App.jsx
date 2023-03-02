import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyProfile from './pages/MyProfile/MyProfile';
import Identification from './pages/Identification/Identification';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import PublicProfile from './pages/PublicProfile/PublicProfile';
import Ads from './pages/Ads/Ads';
import './styles/App.scss';
import MyAds from './pages/MyAds/MyAds';
import CreateAd from './pages/CreateAd/CreateAd';

function App() {
  // const logged = true;
  const logged = useSelector((state) => state.user.logged);

  return (
    <div className="App">
      <Header isLogged={logged} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/identification" element={<Identification />} />
        <Route path="/mon_profil" element={<MyProfile />} />
        <Route path="/resultats" element={<SearchResults />} />
        <Route path="/profil/:id" element={<PublicProfile />} />
        <Route path="/annonces" element={<Ads />} />
        <Route path="/mes-annonces" element={<MyAds />} />
        <Route path="/creer-une-annonce" element={<CreateAd />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
