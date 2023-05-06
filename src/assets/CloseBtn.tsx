import styles from './CloseBtn.module.css'

type CloseBtnProps = {
    toggleMenu: () => void
}

export default function CloseBtn({ toggleMenu }: CloseBtnProps) {
    return (
        <button className={styles.closeBtn} onClick={toggleMenu} type='button'>
            <div></div>
            <div></div>
        </button>
    )
}