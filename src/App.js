import './App.css';
import 'flowbite/dist/flowbite.css';
import Header from './header/header';
import Home from './page/home';
import Kontak from './page/kontak/kontak ';
import './index.css';
import Footer from './footer/footer';



function App() {
  return (
    <div className="App">
    <Header/> 
    <Home/>
    <Kontak/>
    <Footer />
    </div>
  );
}

export default App;
