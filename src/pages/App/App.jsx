import Header from '../../components/Header/Header';
import Identification from '../Identification/Identification';
import './App.scss';

function App() {
  const logged = true;

  return (
    <div className="App">
      <Header isLogged={logged} />
      <Identification />
      <footer />
    </div>
  );
}

export default App;
