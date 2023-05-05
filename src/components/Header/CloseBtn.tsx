import styles from './Header.module.css'

type CloseBtnProps = {
    toggleMenu: () => void
}

export default function CloseBtn({ toggleMenu }: CloseBtnProps) {
    return (
        <button className={styles.closeBtn} onClick={toggleMenu}>
            <div></div>
            <div></div>
        </button>
    )
}