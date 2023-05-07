import envelope from '../../assets/envelope-regular.svg'
import music from '../../assets/music-solid.svg'
import styles from './Bio.module.css'

export default function Bio() {
    return (
        <div>
            <section className={styles.wrapper}>
                <h2 className={styles.h2}>
                    Hey, I'M <span>KEN</span>
                </h2>
                <p className={styles.paragraph}>
                    I'm just like you: I eat, sleep, and breathe music. And, just like you, I'm obsessed with making your recordings sound their absolute best. Mixing music is my full-time gig, and in my 10+ years in the business, I've been fortunate enough to work on hundreds of songs across multiple genres. If you're looking for someone with industry experience that can take your music to the next level, click the button below to reach out!
                </p>
                <div className={styles.btnDiv}>
                    <button className={styles.heroBtnTop}>
                        <img src={envelope} alt="" />
                        Get In Touch
                    </button>

                    <button className={styles.heroBtnBottom}>
                        <img src={music} alt="" />
                        Hear My Work
                    </button>
                </div>
            </section>
        </div>
    )
}