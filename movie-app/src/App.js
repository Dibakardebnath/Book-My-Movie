import logo from './logo.svg';
import './App.css';
import { Nav } from './Component/Nav';
import { AllRoute } from './AllRoute/AllRoute';
import { Footer } from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <AllRoute/>
      <Footer/>
    </div>
  );
}

export default App;
