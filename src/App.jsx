import Que from './pages/Que'
import About from './pages/About'
import Home from './pages/Home'
import Header from './pages/Header'
import LoginPage from './pages/LoginPage'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.css';
import UserMenu from './pages/UserMenu'


function App() {


return (
  <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          
          <Route index element={<Home />} />
          <Route path = "login" element={<LoginPage/>}/>
          <Route path="que" element={<Que />} />
          <Route path="about" element={<About />} />
          <Route path="user" element={<UserMenu/>}/>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
