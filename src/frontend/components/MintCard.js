import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const MintCard = ({ mintActivated, nft, cardClass, cardText, 
    infoPrice, infoType, infoDate, infoTime, infoTotal, infoNetwork, infoWhitelist, infoUtility, infoPrize, infoRoadmap }) => {

    return (
        <Row className="m-0 p-0">
            <Col className="col-8 m-0 p-0">
                <div className={"scratchyCard " + cardClass} >
                    {cardText}
                </div>
            </Col>
            <Col className="col-4 m-0 p-0">
                {mintActivated ? (
                    <>Mint Activated</>
                ) : (
                    <div>
                        PRICE: {infoPrice}
                        {infoType ? ( <><br/>TYPE: {infoType}</> ) : ( <></> )}
                        <br/>DATE: {infoDate}
                        <br/>TIME: {infoTime}
                        <br/>TOTAL: {infoTotal}
                        <br/>NETWORK: {infoNetwork}
                        <br/>WHITELIST: {infoWhitelist}
                        <br/>UTILITY: {infoUtility}
                        <br/>PRIZE: {infoPrize}
                        {infoRoadmap ? ( <><br/>ROADMAP: {infoRoadmap}</> ) : ( <></> )}
                    </div>
                )}
            </Col>
        </Row>
    );
}
export default MintCard