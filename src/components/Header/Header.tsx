import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <h2 className={styles.name}>
                <span style={{ fontWeight: '300', color: 'var(--color-orange)' }}>KEN</span>
                <span>BAUMANN</span>
            </h2>

            <div className={styles.links}>

                <nav className={styles.nav}>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'orange-text' : ''}>
                        Home
                    </NavLink>

                    <NavLink to='/bio' className={({ isActive }) => isActive ? 'orange-text' : ''}>
                        Bio
                    </NavLink>

                    <NavLink to='/credits' className={({ isActive }) => isActive ? 'orange-text' : ''}>
                        Credits
                    </NavLink>
                </nav>

                <button>
                    Portfolio
                </button>

                <button>
                    Contact
                </button>

            </div>

        </header>
    )
}