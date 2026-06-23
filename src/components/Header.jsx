import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../assets/Logo.svg';
import { usePortfolio } from '../hooks/usePortfolio';

function Header() {
    const { navigation } = usePortfolio();

    return (
        <header className={styles.header_container}>
            <div className={styles.header_img}>
                <img src={Logo} alt="logo" className={styles.logo} />
            </div>

            <div className={styles.header_links}>
                {navigation.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `${styles.nav_link} ${isActive ? styles.nav_link_active : ''}`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </header>
    )
}

export default Header