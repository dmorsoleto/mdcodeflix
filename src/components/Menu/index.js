import React from 'react';
import Logo from '../../assets/img/logo.png';
import Button from '../Button'
import './menu.css';

import { Link } from 'react-router-dom';

function Menu() {
     return (
          <nav className="Menu">
               <Link to="/">
                    <img className="Logo" src={Logo} alt="MdcodeFlix Logo" />
               </Link>
               <Button as={Link} to="/cadastro/video">
                    Novo vídeo
               </Button>
          </nav>
     );
}

export default Menu;