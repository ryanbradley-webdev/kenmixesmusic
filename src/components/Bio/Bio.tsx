import { useEffect, useState } from 'react'
import Envelope from '../../assets/Envelope'
import Music from '../../assets/Music'
import styles from './Bio.module.css'
import HeadshotMobile from '/headshot-mobile.png'
import HeadshotTablet from '/headshot-tablet.png'
import HeadshotSmall from '/headshot-small.png'
import HeadshotMedium from '/headshot-medium.png'
import HeadshotLarge from '/headshot-large.png'

const determineMaxWidth = () => {
    const { innerWidth } = window

    if (innerWidth <= 480) return 480
    if (innerWidth <= 768) return 768
    if (innerWidth <= 1200) return 1200
    if (innerWidth <= 1600) return 1600
    return Infinity
}

export default function Bio() {
    const [maxWidth, setMaxWidth] = useState(determineMaxWidth)

    useEffect(() => {
        const listener = () => {
            setMaxWidth(determineMaxWidth)
        }

        window.addEventListener('resize', listener)

        return () => window.removeEventListener('resize', listener)
    }, [])

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

                    <button className={styles.heroBtnTop}>
                        <Envelope />
                        Get In Touch
                    </button>

                    <button className={styles.heroBtnBottom}>
                        <Music />
                        Hear My Work
                    </button>

                </div>

            </section>

            {maxWidth === 480 && <img src={HeadshotMobile} alt="" />}
            {maxWidth === 768 && <img src={HeadshotTablet} alt="" />}
            {maxWidth === 1200 && <img src={HeadshotSmall} alt="" />}
            {maxWidth === 1600 && <img src={HeadshotMedium} alt="" />}
            {maxWidth > 1600 && <img src={HeadshotLarge} alt="" />}
        </div>
    )
}