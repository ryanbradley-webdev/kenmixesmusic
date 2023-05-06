import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import Burger from './Burger'
import { useState } from 'react'
import CloseBtn from '../../assets/CloseBtn'

type HeaderProps = {
    toggleContactModal: () => void
}

export default function Header({ toggleContactModal }: HeaderProps) {
    const [isVisible, setIsVisible] = useState(false)

    const toggleMenuVisibility = () => {
        const { innerWidth } = window
        if (innerWidth > 769) {
            return
        }
        setIsVisible(!isVisible)
    }

    const openContactModal = () => {
        toggleMenuVisibility()
        toggleContactModal()
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
                    <NavLink to='/' className={({ isActive }) => isActive ? 'orange-text' : ''} onClick={toggleMenuVisibility}>
                        Home
                    </NavLink>

                    <button className={styles.menuBtn} onClick={toggleMenuVisibility}>
                        Portfolio
                    </button>

                    <NavLink to='/bio' className={({ isActive }) => isActive ? 'orange-text' : ''} onClick={toggleMenuVisibility}>
                        Bio
                    </NavLink>

                    <NavLink to='/credits' className={({ isActive }) => isActive ? 'orange-text' : ''} onClick={toggleMenuVisibility}>
                        Credits
                    </NavLink>

                    <button className={styles.menuBtn} onClick={openContactModal}>
                        Contact
                    </button>
                </nav>

            </div>

        </header>
    )
}