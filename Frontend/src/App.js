import './App.css';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import ContactPage from "./components/Contact/contact";
import YourAccountPage from './components/YourAccount/YourAccountPage';

function App() {
  return (
    <div>
      <Navbar/>
      {/* </Home> */}
      <Menu />
      <YourAccountPage />
      <ContactPage />
    </div>
  );
}

export default App;
