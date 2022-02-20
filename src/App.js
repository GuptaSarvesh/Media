import logo from './logo.svg';
import './App.css'; 
import Home from './pages/home/home';
import Topbar from './components/topbar/Topbar';
import Profile from './pages/home/profile/Profile';


function App() {
  return (
    <div className="">
      <Topbar />
      <Home/>
      
    </div>
  );
  }

export default App;
