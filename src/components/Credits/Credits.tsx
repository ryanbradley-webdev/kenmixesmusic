import { CSSProperties, useEffect, useRef, useState } from 'react'
import LeftCaret from '../../assets/LeftCaret'
import RightCaret from '../../assets/RightCaret'
import styles from './Credits.module.css'
import Thumbnail from './Thumbnail'

const chooseImgSize = () => {
    const { innerWidth } = window
    if (innerWidth <= 480) return 180
    if (innerWidth <= 768) return 250
    if (innerWidth <= 1200) return 300
    return 370
}

export default function Credits() {
    const [imgWidth, setImgWidth] = useState(chooseImgSize)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [scrollPaused, setScrollPaused] = useState(false)
    const [scrollIncrement, setScrollIncrement] = useState(2)

    const gridRef = useRef<HTMLDivElement>(null)
    
    const localStyles = {
        grid: {
            gridTemplateColumns: `repeat(18, ${imgWidth}px)`,
            gridTemplateRows: `repeat(3, ${imgWidth}px)`
        },
        img: {
            width: `${imgWidth}px`,
            height: `${imgWidth}px`,
            objectFit: 'cover' as CSSProperties['objectFit']
        }
    }

    const scrollLeft = () => {
        if (gridRef && gridRef.current) {
            const position = gridRef.current.scrollLeft
            const unroundedUnits = position / (imgWidth + 8)
            const units = Math.floor(position / (imgWidth + 8))
            const newPosition = units === unroundedUnits ? (units - 1) * (imgWidth + 8) : units * (imgWidth + 8)
            gridRef.current.scrollLeft = newPosition
            setScrollPosition(newPosition)
        }
    }

    const scrollRight = () => {
        if (gridRef && gridRef.current) {
            const position = gridRef.current.scrollLeft
            const units = Math.floor(position / (imgWidth + 8))
            const newPosition = (units + 1) * (imgWidth + 8)
            gridRef.current.scrollLeft = newPosition
            setScrollPosition(newPosition)
        }
    }

    const pauseScrolling = () => {
        setScrollPaused(true)
    }

    const resumeScrolling = () => {
        setScrollPaused(false)
    }

    useEffect(() => {
        const listener = () => {
            setImgWidth(chooseImgSize)
        }

        window.addEventListener('resize', listener)

        return () => window.removeEventListener('resize', listener)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            !scrollPaused && setScrollPosition(prev => prev + scrollIncrement)
        }, 50)

        return () => clearInterval(interval)
    }, [scrollPaused, scrollIncrement])

    useEffect(() => {
        if (gridRef && gridRef.current) {
            if (scrollPosition > gridRef.current.scrollLeft + 100) {
                setScrollIncrement(-2)
            }
            if (scrollPosition < -100) {
                setScrollIncrement(2)
            }
        }
    }, [scrollPosition])

    useEffect(() => {
        if (gridRef && gridRef.current) {
            gridRef.current.scrollLeft = scrollPosition
        }
    }, [scrollPosition])

    return (
        <div className={styles.wrapper}>

            <button
                className={styles.caret}
                onClick={scrollLeft}
                onMouseOver={pauseScrolling}
                onMouseOut={resumeScrolling}
            >
                <LeftCaret />
            </button>
            
            <div
                className={styles.scrollingGrid}
                style={localStyles.grid}
                ref={gridRef}
                onMouseOver={pauseScrolling}
                onMouseOut={resumeScrolling}
            >
                <Thumbnail>
                    <img src='/brasko.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/lift-it-up-and-feel-good.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/best-life.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/motions.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/reckless-endangerment.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <a href="https://www.youtube.com/watch?v=DpbhVj8aGRM&t=15s" target='_blank' rel='noreferrer noopener'>
                        <img src='https://img.youtube.com/vi/DpbhVj8aGRM/0.jpg' alt="" style={localStyles.img} />
                    </a>
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/quota.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/grown-ups.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/after-the-party.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/parables.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <a href='https://www.youtube.com/watch?v=k22kg5fhQt0&t=15s' target='_blank' rel='noreferrer noopener'>
                        <img src='https://img.youtube.com/vi/k22kg5fhQt0/0.jpg' alt="" style={localStyles.img} />
                    </a>
                </Thumbnail>

                <Thumbnail>
                    <img src='/alterego-vii.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/brothers.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/glitter-bomb.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/cast-of-characters.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <a href="https://www.youtube.com/watch?v=hlItub_HDBA&t=15s" target='_blank' rel='noreferrer noopener'>
                        <img src='https://img.youtube.com/vi/hlItub_HDBA/0.jpg' alt="" style={localStyles.img} />
                    </a>
                </Thumbnail>

                <Thumbnail>
                    <img src='/dirty-fuss.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/tru-genesis.png' alt="" style={localStyles.img} />
                </Thumbnail>


                <Thumbnail>
                    <img src='/common-kid.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/synthesize.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/moods.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <a href="https://www.youtube.com/watch?v=9et51orMrLQ&t=15s" target='_blank' rel='noreferrer noopener'>
                        <img src='https://img.youtube.com/vi/9et51orMrLQ/0.jpg' alt="" style={localStyles.img} />
                    </a>
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/new-blood.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/tik-tok-tailgate.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/obsidian.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/glory-days.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <a href="https://www.youtube.com/watch?v=IUhLFkxo0pM&t=15s" target='_blank' rel='noreferrer noopener'>
                        <img src='https://img.youtube.com/vi/IUhLFkxo0pM/0.jpg' alt="" style={localStyles.img} />
                    </a>
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/never-alone.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/alterego-v.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/the-untethering.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/exhibit.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <a href="https://www.youtube.com/watch?v=8KHHwIDX5Yw&t=15s" target='_blank' rel='noreferrer noopener'>
                        <img src='https://img.youtube.com/vi/8KHHwIDX5Yw/0.jpg' alt="" style={localStyles.img} />
                    </a>
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/the-night-driver.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/violet-mourning.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/jacob-resch.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/andy-elison.png' alt="" style={localStyles.img} />
                </Thumbnail>


                <Thumbnail>
                    <img src='/rhythm-scott.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <a href="https://www.youtube.com/watch?v=n_7al39PSzo" target='_blank' rel='noreferrer noopener'>
                        <img src='https://img.youtube.com/vi/n_7al39PSzo/0.jpg' alt="" style={localStyles.img} />
                    </a>
                </Thumbnail>

                <Thumbnail>
                    <img src='/wrong-side-of-the-bed.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/stages.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/backroad-summertime.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/silex.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <a href="https://www.youtube.com/watch?v=tFtW-VoijBI&t=15s" target='_blank' rel='noreferrer noopener'>
                        <img src='https://img.youtube.com/vi/tFtW-VoijBI/0.jpg' alt="" style={localStyles.img} />
                    </a>
                </Thumbnail>

                <Thumbnail>
                    <img src='/adolescence.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/the-explorer.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/midnight-insomnia.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/alterego-vi.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <a href="https://www.youtube.com/watch?v=6sDLARBnzSM&t=15s" target='_blank' rel='noreferrer noopener'>
                        <img src='https://img.youtube.com/vi/6sDLARBnzSM/0.jpg' alt="" style={localStyles.img} />
                    </a>
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/60-and-sunny.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/clocking-out.png' alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/heads-of-people.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src='/novva.png' alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <a href="https://open.spotify.com/track/2DkNJATQWkS36JlDhoqyKl" target='_blank' rel='noreferrer noopener'>
                        <img src='/rose-tint.png' alt="" style={localStyles.img} />
                    </a>
                </Thumbnail>
                
                <Thumbnail>
                    <img src='/adam-agin.png' alt="" style={localStyles.img} />
                </Thumbnail>

            </div>

            <button
                className={styles.caret}
                onClick={scrollRight}
                onMouseOver={pauseScrolling}
                onMouseOut={resumeScrolling}
            >
                <RightCaret />
            </button>

        </div>
    )
}