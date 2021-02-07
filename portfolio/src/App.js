import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './pages/Main';
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
