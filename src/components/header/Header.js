import React,{useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from './Header.module.scss';
import {FaShoppingCart} from 'react-icons/fa';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import {FaTimes} from 'react-icons/fa';

// if you are using export before this you use it in any part of your application....
export const logo = (
    <div className={styles.header}>
        <div className={styles.logo}>
            <Link to='/'>
                <h2>Shop<span>Ito</span>.</h2>
            </Link>
        </div>
    </div>
)

const activeLink = ({isActive}) => (isActive? `${styles.active}`:"")

const cart = (
    <span className={styles.cart}>
        <Link to='/cart'>Cart<FaShoppingCart size={20} /><p>0</p></Link>
    </span>
)

const Header = () => {
    const [showMenu, setShowMenu]=useState(false);
    const [scrollPage, setScrollPage] = useState(false);

    const fixNavbar = () => {
        if(window.scrollY > 50){
            setScrollPage(true)
        }else{
            setScrollPage(false)
        }
    };
    window.addEventListener('scroll', fixNavbar);
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    const hideMenu = () => {
        setShowMenu(false)
    }
    return(
        <header className={scrollPage ? `${styles.fixed}`:null}>
            {logo}
            <nav className={showMenu?`${styles['show-nav']}`:`${styles['hide-nav']}`}>
                <div className={showMenu?`${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`:`${styles['nav-wrapper']}`} onClick={hideMenu}></div>
                <ul>
                    <li className={styles['logo-mobile']}>
                        {logo}
                        <FaTimes size={22} color='#fff' onClick={hideMenu} />
                    </li>
                    <li>
                        <NavLink to='/shop' className={activeLink}>
                            Shop
                        </NavLink>
                    </li>
                </ul>
                <div className={styles["header-right"]}>
                    <span className={styles.links}>
                        <NavLink to={'login'} className={activeLink}>Login</NavLink>
                        <NavLink to={'register'} className={activeLink}>Register</NavLink>
                        <NavLink to={'order-history'} className={activeLink}>My Order</NavLink>
                    </span>
                    {cart}
                </div>
            </nav>
            <div className={styles['menu-icon']}>
                {cart}
                <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
             </div>
        </header>
    )
}

export default Header;