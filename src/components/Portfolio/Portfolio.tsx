import { useState } from 'react'
import styles from './Portfolio.module.css'
import Waveform from './Waveform'
import TrackItem from './TrackItem'

type PortfolioProps = {
    isVisible: boolean,
    toggleModal: () => void
}

export default function Portfolio({ isVisible, toggleModal }: PortfolioProps) {
    const [selectedTrack, setSelectedTrack] = useState('')

    const handleClick = (track: string) => {
        if (track === selectedTrack || !track) return

        setSelectedTrack(track)
    }

    return (
        <div className={styles.modal} style={{ right: isVisible ? '0' : '-300px' }}>
            Portfolio
            <button onClick={toggleModal}>close</button>
            <Waveform track={selectedTrack} />
            <TrackItem onClick={handleClick} />
        </div>
    )
}