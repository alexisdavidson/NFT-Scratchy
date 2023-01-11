import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const Audio = ({  }) => {
    const [audioPlaying, setAudioPlaying] = useState(false)

    const clickAudio = () => {
        setAudioPlaying(!audioPlaying)

        if (!audioPlaying) {
            console.log("Start audio")
        }
        else {
            console.log("Pause audio")
        }
    }
    return (
        <div className={"audioDiv"} onClick={clickAudio}>
            <div className={!audioPlaying ? "audioButtonPlay" : "audioButtonStop"} >
                
            </div>
        </div>
    );
}
export default Audio