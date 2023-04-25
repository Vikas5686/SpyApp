import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Conponents/Navbar'
import Massages from './Conponents/Massages'
import CallLogs from './Conponents/CallLogs'
import Contacts from './Conponents/Contacts'
import TotalApp from './Conponents/TotalApp'
import Battery from './Conponents/Battery'
import Images from './Conponents/Images'
import Home from './Conponents/Home'

function App() {
  return (

    // <NavLink to="/home">Home</NavLink>
    // <NavLink to="/Massages">TotalMassages</NavLink>
    // <NavLink to="/CallLogs">TotalCallLogs</NavLink>
    // <NavLink to="/Contacts">TotalContacts</NavLink>
    // <NavLink to="/Images">TotalImages</NavLink>
    // <NavLink to="/Apps">TotalApps</NavLink>
    <>
    {/* <Link to="/content">Content</Link> */}
    <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/Massages' element={<Massages/>} />
        <Route path='/CallLogs' element={<CallLogs/>} />
        <Route path='/Contacts' element={<Contacts/>} />
        <Route path='/Images' element={<Images/>} />
        <Route path='/Apps' element={<TotalApp/>} />
        <Route path='/Battary' element={<Battery/>} />
      </Routes>
    </>
  );
}

export default App;
