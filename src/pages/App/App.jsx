import Header from '../../components/Header/Header';
import MyProfile from '../MyProfile/MyProfile';
import './App.scss';

function App() {
  const logged = true;

  return (
    <div className="App">
      <Header isLogged={logged} />
      <MyProfile />
      <main />
      <footer />
    </div>
  );
}

export default App;
