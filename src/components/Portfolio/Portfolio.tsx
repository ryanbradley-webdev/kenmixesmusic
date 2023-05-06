import styles from './Portfolio.module.css'

type PortfolioProps = {
    isVisible: boolean,
    toggleModal: () => void
}

export default function Portfolio({ isVisible, toggleModal }: PortfolioProps) {
    return (
        <div className={styles.modal} style={{ right: isVisible ? '0' : '-300px' }}>
            Portfolio
            <button onClick={toggleModal}>close</button>
        </div>
    )
}