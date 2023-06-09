import Envelope from '../../assets/Envelope'
import Music from '../../assets/Music'
import styles from './Bio.module.css'

type BioProps = {
    togglePortfolio: () => void,
    toggleContactModal: () => void
}

export default function Bio({ togglePortfolio, toggleContactModal }: BioProps) {
    return (
        <div className={styles.bio}>
            <section className={styles.wrapper}>

                <h2 className={styles.h2}>
                    Hey, I'M <span>KEN</span>
                </h2>

                <p className={styles.paragraph}>
                    I'm just like you: I eat, sleep, and breathe music. And, just like you, I'm obsessed with making your recordings sound their absolute best. Mixing music is my full-time gig, and in my 10+ years in the business, I've been fortunate enough to work on hundreds of songs across multiple genres. If you're looking for someone with industry experience that can take your music to the next level, click the button below to reach out!
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

            <img
                srcSet='/headshot-mobile.png 480w, /headshot-tablet.png 768w, /headshot-small.png 600w, /headshot-medium.png 800w, /headshot-large.png 1500w'
                sizes='(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1200px) 600px, (max-width: 1600px) 800px, 1500px'
                alt=''
            />
        </div>
    )
}