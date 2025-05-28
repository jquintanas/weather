import 'gridstack/dist/gridstack.css';
import './App.css';
import LeftDashboard from './components/body/left/leftDashboard.component';
import './components/gridstack/gridstack.css';
import SearchBar from "./components/searchBar/searchBar.component";
import UserPhoto from './components/user/user.component';



function App() {


  return (
    <>
      <div className="container">
        <div className='left'>
          <div className='header'>
            <div className="logo">
              <img src="vite.svg" alt="logo" />
            </div>
            <div className="searchBar">
              <SearchBar />
            </div>
          </div>
          <div className='body'>
            <LeftDashboard />
          </div>
        </div>
        <div className='right'>
          <div className='header'>
            <UserPhoto />
          </div>
          <div className='body'></div>
        </div>
      </div>
    </>
  )
}

export default App
