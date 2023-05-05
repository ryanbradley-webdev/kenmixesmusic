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
                    <NavLink to='/'>
                        Home
                    </NavLink>

                    <NavLink to='/bio'>
                        Bio
                    </NavLink>

                    <NavLink to='/credits'>
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