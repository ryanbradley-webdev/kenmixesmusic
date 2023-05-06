import envelope from '../../assets/envelope-regular.svg'
import music from '../../assets/music-solid.svg'
import styles from './Home.module.css'

type HomeProps = {
    toggleContactModal: () => void
}

export default function Home({ toggleContactModal }: HomeProps) {
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

            <button className={styles.heroBtnTop} onClick={toggleContactModal}>
                <img src={envelope} alt="" />
                Get In Touch
            </button>

            <button className={styles.heroBtnBottom}>
                <img src={music} alt="" />
                Hear My Work
            </button>

        </section>
    )
}