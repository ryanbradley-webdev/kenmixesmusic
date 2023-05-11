import { useEffect, useRef, useState } from 'react'
import LeftCaret from '../../assets/LeftCaret'
import RightCaret from '../../assets/RightCaret'
import styles from './Credits.module.css'
import Thumbnail from './Thumbnail'
import Placeholder from '/square-placeholder.png'

const chooseImgSize = () => {
    const { innerWidth } = window
    if (innerWidth <= 480) return 180
    if (innerWidth <= 768) return 250
    if (innerWidth <= 1200) return 300
    return 370
}

export default function Credits() {
    const [imgWidth, setImgWidth] = useState(chooseImgSize)
    const gridRef = useRef<HTMLDivElement>(null)

    const localStyles = {
        grid: {
            gridTemplateColumns: `repeat(18, ${imgWidth}px)`,
            gridTemplateRows: `repeat(3, ${imgWidth}px)`
        },
        img: {
            width: `${imgWidth}px`
        }
    }

    const scrollLeft = () => {
        if (gridRef && gridRef.current) {
            const position = gridRef.current.scrollLeft
            const unroundedUnits = position / (imgWidth + 8)
            const units = Math.floor(position / (imgWidth + 8))
            const newPosition = units === unroundedUnits ? (units - 1) * (imgWidth + 8) : units * (imgWidth + 8)
            gridRef.current.scrollLeft = newPosition
        }
    }

    const scrollRight = () => {
        if (gridRef && gridRef.current) {
            const position = gridRef.current.scrollLeft
            const units = Math.floor(position / (imgWidth + 8))
            const newPosition = (units + 1) * (imgWidth + 8)
            gridRef.current.scrollLeft = newPosition
        }
    }

    useEffect(() => {
        const listener = () => {
            setImgWidth(chooseImgSize)
        }

        window.addEventListener('resize', listener)

        return () => window.removeEventListener('resize', listener)
    })

    return (
        <div className={styles.wrapper}>

            <button className={styles.caret} onClick={scrollLeft}>
                <LeftCaret />
            </button>
            
            <div className={styles.scrollingGrid} style={localStyles.grid} ref={gridRef}>
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>


                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>


                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>
                
                <Thumbnail>
                    <img src={Placeholder} alt="" style={localStyles.img} />
                </Thumbnail>

            </div>

            <button className={styles.caret} onClick={scrollRight}>
                <RightCaret />
            </button>

        </div>
    )
}