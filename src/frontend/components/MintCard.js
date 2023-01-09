import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const MintCard = ({ mintActivated, nft, cardClass, cardText, nextPage, subpage,
    infoPrice, infoType, infoDate, infoTime, infoTotal, infoNetwork, infoWhitelist, infoUtility, infoPrize, infoRoadmap,
    mobileTitle }) => {

    const [displayCardInfo, setDisplayCardInfo] = useState(false)

    return (
        <Row className="m-0 p-0">
            <Row className="m-0 p-0">
                <Col className="col-0 col-xl-1 m-0 p-0">
                </Col>
                <Col className="col-12 col-xl-7 m-0 p-0">
                    <div className={"scratchyCard " + cardClass} onClick={() => setDisplayCardInfo(true)} >
                        {cardText}
                    </div>
                </Col>
                <Col className="col-12 col-xl-3 m-0 p-0 displayDesktop">
                    {mintActivated ? (
                        <>Mint Activated</>
                    ) : (
                        <div className="mintDescription">
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
                <Col className="col-0 col-xl-1 m-0 p-0">
                </Col>
            </Row>




            {/* MOBILE */}
            <Row className="m-0 p-0 displayMobile">
                <div>
                    TAP THE CARD FOR MORE INFO
                </div>
                <div className="mobileMintBottomMenu">
                    <div className="arrowDiv">
                        {subpage > 1 ? (
                            <div className={"arrowDiv leftArrowMobile"} onClick={() => nextPage(-1)}></div>
                        ) : ( <></> )}
                    </div>
                    <div className="subNavbarMenu" onClick={() => setDisplayCardInfo(true)} >
                        {mobileTitle}
                    </div>
                    <div className="arrowDiv">
                        {subpage < 4 ? (
                            <div className={"arrowDiv rightArrowMobile"} onClick={() => nextPage(1)}></div>
                        ) : ( <></> )}
                    </div>
                </div>

                {displayCardInfo ? (
                    <Row className="popupBigSmallText">
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

                        <div className="popupButtonClose mt-3" onClick={() => setDisplayCardInfo(false)} >
                            Close
                        </div>
                    </Row>
                ) : (
                    <></>
                )}
            </Row>
        </Row>
    );
}
export default MintCard