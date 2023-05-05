import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import Burger from './Burger'
import { useState } from 'react'
import CloseBtn from './CloseBtn'

export default function Header() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleMenuVisibility = () => {
        const { innerWidth } = window
        if (innerWidth > 769) {
            return
        }
        setIsVisible(!isVisible)
    }

    return (
        <header className={styles.header}>
            <h2 className={styles.name}>
                <span style={{ fontWeight: '300', color: 'var(--color-orange)' }}>KEN</span>
                <span>BAUMANN</span>
            </h2>

            <Burger toggleMenu={toggleMenuVisibility} />

            <div className={styles.menu} style={{ right: isVisible ? '0' : '-250px' }}>

                <CloseBtn toggleMenu={toggleMenuVisibility} />

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

                <button className={styles.menuBtn}>
                    Portfolio
                </button>

                <button className={styles.menuBtn}>
                    Contact
                </button>

            </div>

        </header>
    )
}