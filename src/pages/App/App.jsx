import Header from '../../components/Header/Header';
import './App.scss';

function App() {
  const logged = true;

  return (
    <div className="App">
      <Header isLogged={logged} />
      <main />
      <footer />
    </div>
  );
}

export default App;
