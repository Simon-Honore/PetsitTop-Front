import Header from '../../components/Header/Header';
import './App.scss';

function App() {
  const logged = false;

  return (
    <div className="App">
      <Header isLogged={logged} />
      <main></main>
      <footer />
    </div>
  );
}

export default App;
