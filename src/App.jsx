import {
  Routes, Route, useLocation, Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyProfile from './pages/MyProfile/MyProfile';
import Identification from './pages/Identification/Identification';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import PublicProfile from './pages/PublicProfile/PublicProfile';
import Ads from './pages/Ads/Ads';
import MyAds from './pages/MyAds/MyAds';
import CreateAd from './pages/CreateAd/CreateAd';
import LegalNotice from './pages/LegalNotice/LegalNotice';
import CGU from './pages/CGU/CGU';
import Team from './pages/Team/Team';
import { changeFieldLogin } from './store/reducers/user';
import NotFound from './pages/NotFound/NotFound';

import './styles/App.scss';

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const isLoggedInLocalStorage = !!localStorage.getItem('isLogged');
    if (isLoggedInLocalStorage === true) {
      dispatch(changeFieldLogin({
        key: 'logged',
        value: !!localStorage.getItem('isLogged'),
      }));
      dispatch(changeFieldLogin({
        key: 'accessToken',
        value: localStorage.getItem('accessToken'),
      }));
      dispatch(changeFieldLogin({
        key: 'userId',
        value: localStorage.getItem('userId'),
      }));
    }
  }, []);

  const isLogged = useSelector((state) => state.user.logged);

  return (
    <div className="App">
      <Header isLogged={isLogged} />
      <Routes>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/identification" element={<Identification />} />
          <Route path="/resultats" element={<SearchResults />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/equipe" element={<Team />} />

          {isLogged && (
          <>
            <Route path="/mon_profil" element={<MyProfile />} />
            <Route path="/profil/:id" element={<PublicProfile />} />
            <Route path="/annonces" element={<Ads />} />
            <Route path="/mes-annonces" element={<MyAds />} />
            <Route path="/creer-une-annonce" element={<CreateAd />} />
          </>
          )}

          <Route path="/*" element={<NotFound />} />
        </Switch>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
