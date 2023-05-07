import { useEffect, useRef } from 'react'
import WaveSurfer from 'wavesurfer.js'

type WaveformProps = {
    track: string
}

export default function Waveform({ track }: WaveformProps) {
    const waveRef = useRef(null)

    useEffect(() => {
        if (waveRef.current) {
            const wavesurfer = WaveSurfer.create({
                container: waveRef.current
            })
            wavesurfer.load(track)

            return () => wavesurfer.destroy()
        }
    }, [track])

    return (
        <div ref={waveRef} style={{ width: '250px' }}></div>
    )
}