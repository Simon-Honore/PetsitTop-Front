import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './App.scss';

function App() {
  const logged = true;

  return (
    <div className="App">
      <Header isLogged={logged} />
      <main />
      <Footer />
    </div>
  );
}

export default App;
