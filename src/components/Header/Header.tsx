import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import Burger from './Burger'
import { useEffect, useState } from 'react'
import CloseBtn from '../../assets/CloseBtn'
import Facebook from '../../assets/Facebook'
import Instagram from '../../assets/Instagram'

type HeaderProps = {
    toggleContactModal: () => void,
    togglePortfolio: () => void
}

export default function Header({ toggleContactModal, togglePortfolio }: HeaderProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [background, setBackground] = useState('')
    const [transitionDelay, setTransitionDelay] = useState('')

    const location = useLocation()

    const toggleMenuVisibility = () => {
        const { innerWidth } = window
        if (innerWidth > 1024) {
            return
        }
        setIsVisible(!isVisible)
    }

    const openContactModal = () => {
        toggleMenuVisibility()
        toggleContactModal()
    }

    const openPortfolio = () => {
        toggleMenuVisibility()
        togglePortfolio()
    }

    useEffect(() => {
        if (location.pathname.includes('bio')) {
            setBackground('var(--color-bg-portfolio)')
            setTransitionDelay('0.5s')
        } else {
            setBackground('')
            setTransitionDelay('')
        }
    }, [location])

    return (
        <header className={styles.header} style={{ background, transitionDelay }}>
            <h2 className={styles.name}>
                <span style={{ fontWeight: '300', color: 'var(--color-orange)' }}>KEN</span>
                <span>BAUMANN</span>
            </h2>

            <Burger toggleMenu={toggleMenuVisibility} />

            <div className={styles.menu} style={{ right: isVisible ? '0' : '-250px' }}>

                <CloseBtn toggleMenu={toggleMenuVisibility} className={styles.closeBtn} />

                <nav className={styles.nav}>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'orange-text' : ''} onClick={toggleMenuVisibility}>
                        Home
                    </NavLink>

                    <button className={styles.menuBtn} onClick={openPortfolio}>
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

                    <div className={styles.iconDiv}>

                        <Link to='https://www.facebook.com/kenmixesmusic' target='_blank' rel='noopener noreferrer'>
                            <Facebook />
                        </Link>

                        <Link to='https://www.instagram.com/kenmixesmusic/' target='_blank' rel='noopener noreferrer'>
                            <Instagram />
                        </Link>

                    </div>
                
                </nav>


            </div>

        </header>
    )
}