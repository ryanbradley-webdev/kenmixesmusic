import PlayBtn from '../../assets/PlayBtn'
import styles from './Portfolio.module.css'

type TrackItemProps = {
    onClick: (track: string) => void
}

export default function TrackItem({ onClick }: TrackItemProps) {
    return (
        <button className={styles.trackItem} onClick={() => onClick}>
            <PlayBtn isSelected={true} />
            <span>Audio Track</span>
        </button>
    )
}