import { Link, NavLink, useNavigate } from 'react-router-dom';
import classes from './Navigation.module.scss';
import { useState } from 'react';


import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Navigation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();


    const toggleAuth = () => {
        isLoggedIn ? navigate('/') : navigate('/auth');
        setIsLoggedIn( prevState => !prevState);
    }

    const [menuOpen, setMenuOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          // Dacă se apasă tasta "Enter", setam starea la o valoare goală
          setInputValue('');
        }
      };

  
    
    return <header>

     <div className={classes.menuIcon} onClick={() => setMenuOpen(!menuOpen)} >
        <MenuIcon></MenuIcon>
      </div>

         <Link to='/' >  <img src={require('./StartingPage/Newsfeed/assets/it.png')}
                            alt='Profile'
                            className={classes.logoImg}>
                        </img> 
           </Link>                
        
        <Link to='/'>
            <div className={classes.logo}>Social Media App</div>
        </Link>


        <nav>
            <ul className={`${classes.menu} ${menuOpen ? classes['open'] : {}}`}>
                <li className={classes.menuItem}>
                    <NavLink to='/me'>My Profile</NavLink>
                </li>
                <li className={classes.menuItem}>
                    <NavLink to='/friends'>Friends</NavLink>
                </li>
                <li className={classes.menuItem} onClick={toggleAuth}>
                    <NavLink to='/auth'>{isLoggedIn ? 'Login' : 'Logout'}</NavLink>
                </li>
            </ul>
         
        </nav>

        <div className={classes.topbarCenter}>
        <div className={classes.searchbar}>
          <SearchIcon className={classes.searchIcon}/>
          <input  
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
            placeholder="Search for friend, post or video"
            className={classes.searchInput}
          />
        </div>
      </div>
    </header>
}

export default Navigation;