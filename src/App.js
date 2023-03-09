import { Search } from '@mui/icons-material';
import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/student-dashboard/dashboard/Dashboard';

function App() {
  
  const[active, setActive] = useState(false);

  const handleSubmit = () => setActive(!active);

  return (
    <div className="app">
      <div className='app__light-blue'></div>
      <div className='app__dark-blue'></div>
      <div className='app__container'>
        <Sidebar />
        <Dashboard />
      </div>
      <Search 
        className='search__icon'
        onClick={ handleSubmit }
      />
      <div className={`app__input ${active && 'active__search'}`} >
        <input type='text' placeholder='Search for student..' />
        <button>Search</button>
      </div>
    </div>
  );
}

export default App;
