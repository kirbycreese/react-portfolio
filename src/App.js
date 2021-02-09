import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './pages/Main';
import About from './pages/About';
import Mywork from './pages/Mywork.js';
import Contact from './pages/Contact.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Mywork />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
