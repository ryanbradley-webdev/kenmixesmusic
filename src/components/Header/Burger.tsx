import styles from './Header.module.css'

type BurgerProps = {
    toggleMenu: () => void
}

export default function Burger({ toggleMenu }: BurgerProps) {
    return (
        <button className={styles.burgerBtn} onClick={toggleMenu}>
            <div className={styles.burgerDiv}></div>
        </button>
    )
}