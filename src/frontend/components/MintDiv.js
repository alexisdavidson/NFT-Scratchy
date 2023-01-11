import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const MintDiv = ({ account, nft}) => {

    const mintButton = () => {
        console.log("mintButton")
    }

    return (
        <Row className="mintDescriptionMintActivated">
            <Row className="m-auto p-0"><div>10,000/10,000 CARDS LEFT</div></Row>
            <Row className="m-auto p-0">
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