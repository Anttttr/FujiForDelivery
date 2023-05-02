import { Outlet, Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div >
      <div className = "container header-front ">
        <img className = "logo-top" src = "https://www.sushifuji.ru/public/newimages/logo_svg_new.svg" />
        <nav>
          <ul className = "menu-top">
            <li>
              <Link style ={{paddingRight: 10}} to="/">Главная</Link>
            </li>
            <li>
              <Link style ={{paddingRight: 10}} to="/que">Очередь</Link>
            </li>
            <li>
              <Link style ={{paddingRight: 10}} to="/about">О сайте</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className = "container">
        <Outlet />
      </div>
    </div>
  )
};

export default Header;