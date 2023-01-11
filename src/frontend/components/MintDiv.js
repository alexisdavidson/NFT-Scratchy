import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'
import mintMinus from './assets/mintMinus.svg'
import mintPlus from './assets/mintPlus.svg'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const MintDiv = ({ account, nft}) => {
    const [quantity, setQuantity] = useState(1)

    const changeQuantity = (direction) => {
        if (quantity + direction < 1)
            setQuantity(1)
        else if (quantity + direction > 2)
            setQuantity(2)
        else
            setQuantity(quantity + direction)
    }

    const mintButton = () => {
        console.log("mintButton")
    }

    return (
        <Row className="mintDescriptionMintActivated">
            <Row className="m-auto p-0">
                <div>10,000/10,000 CARDS LEFT</div>
                <div className="quantitySelectorRow">
                    <div onClick={() => changeQuantity(-1)}><img src={mintMinus} className="minusPlusImage" /></div>
                    <div>{quantity}</div>
                    <div onClick={() => changeQuantity(1)}><img src={mintPlus} className="minusPlusImage" /></div>
                </div>
                {account ? (
                    <div className="mintButton" onClick={mintButton}>MINT FOR FREE</div>
                ) : (
                    <div className="mintButton" onClick={mintButton}>CONNECT</div>
                )}
                
            </Row>
            <Row className="m-auto p-0">
                <div>2 CARDS PER WALLET</div>
                {account ? (
                    <div className="m-auto p-0">
                        {account.slice(0, 9) + '...' + account.slice(34, 42)}
                    </div>
                ) : (
                    <></>
                )}
            </Row>
        </Row>
    );
}
export default MintDiv