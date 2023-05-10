import Envelope from '../../assets/Envelope'
import Music from '../../assets/Music'
import styles from './Home.module.css'

type HomeProps = {
    toggleContactModal: () => void,
    togglePortfolio: () => void
}

export default function Home({ toggleContactModal, togglePortfolio }: HomeProps) {
    return (
        <section className={styles.heroSection}>

            <h1 className={styles.hero}>
                DON'T LET
                <br />
                A <span>BAD MIX</span>
                <br />
                DROWN OUT
                <br />
                <span>GREAT MUSIC</span>
            </h1>

            <p className={styles.subheader}>
                My mixes help your recordings cut through the noise
            </p>

            <div className={styles.btnDiv}>

                <button className={styles.heroBtnTop} onClick={toggleContactModal}>
                    <Envelope />
                    Get In Touch
                </button>

                <button className={styles.heroBtnBottom} onClick={togglePortfolio}>
                    <Music />
                    Hear My Work
                </button>

            </div>

        </section>
    )
}