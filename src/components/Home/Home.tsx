import envelope from '../../assets/envelope-regular.svg'
import styles from './Home.module.css'

export default function Home() {
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

            <p>
                My mixes help your recordings cut through the noise
            </p>

            <button className={styles.heroBtnTop}>
                <img src={envelope} alt="" />
                Get In Touch
            </button>

            <button className={styles.heroBtnBottom}>
                Hear My Work
            </button>

        </section>
    )
}