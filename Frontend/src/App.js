import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Menu from './components/Menu/Menu';
import YourAccountPage from './components/YourAccount/YourAccountPage';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Menu /> */}
      <YourAccountPage />
    </div>
  );
}

export default App;
