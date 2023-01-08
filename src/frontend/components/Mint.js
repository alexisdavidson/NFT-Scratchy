import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'
import MintCard from './MintCard'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const Mint = ({  }) => {
    const [submenu, setSubmenu] = useState(1)
    const [subpage, setSubpage] = useState(1)


    const nextPage = (direction) => {
        setSubpage(subpage + direction)
    }

    return (
        <Row className="m-0 p-0 mint">
            <Row className="m-0 p-0">
                <div className={"subNavbarMenu " 
                    + (submenu == 1 ? "selectedSubmenu " : " ") 
                    + (submenu == 1 ? " " : "subNavbarMenuNotSelected ")}
                    onClick={() => setSubmenu(1)} >
                    Genesis Scratchy Card
                </div>
                <div className={"subNavbarMenu " 
                    + (submenu == 2 ? "selectedSubmenu " : " ") 
                    + (submenu == 2 ? " " : "subNavbarMenuNotSelected ")}
                    onClick={() => setSubmenu(2)} >
                    Seasonal Scratchy Card
                </div>
            </Row>
            {submenu == 1 ? (
                <MintCard cardClass="scratchyCardGenesis" mintActivated={false} 
                    infoPrice="FREE MINT (2 PER WALLET)" infoDate="15 JANUARY 2023" infoTime="12PM UTC"
                    infoTotal="10,000 CARDS" infoNetwork="ETHEREUM" infoWhitelist="NO / FCFS" infoUtility="PROOF OF SCRATCH"
                    infoPrize="FREE MINT SPOT FOR SEASONAL SCRATCHY CARD"
                    infoRoadmap="CLICK 'SEASONAL SCRATCHY CARD' BUTTON ABOVE" />
            ) : (
                <>
                    {/* PAGINATION ARROWS */}
                    <div className="arrowsDiv">
                        {subpage > 1 ? (
                            <div className={"leftArrow"} onClick={() => nextPage(-1)}></div>
                        ) : ( <></> )}
                        {subpage < 4 ? (
                            <div className={"rightArrow"} onClick={() => nextPage(1)}></div>
                        ) : ( <></> )}
                    </div>

                    {/* CONTENT */}
                    {
                        {
                            '1': <MintCard cardClass="scratchyCard1" mintActivated={false} 
                                infoPrice="FREE MINT" infoType="SEASON 1 SCRATCHY CARD" infoDate="25 JANUARY 2023" infoTime="12PM UTC"
                                infoTotal="5,000 CARDS" infoNetwork="ETHEREUM" infoWhitelist="SCRATCH 2 GENESIS SCRATCHY CARD TO MINT 1 SEASON 1 SCRATCHY CARD"
                                infoUtility="SCRATCH & WIN $COIN"
                                infoPrize="UP TO 200 $COIN" />,
                            '2': <MintCard cardClass="scratchyCard2" mintActivated={false} 
                                infoPrice="FREE MINT" infoType="SEASON 2 SCRATCHY CARD" infoDate="5 FEBRUARY 2023" infoTime="12PM UTC"
                                infoTotal="2,500 CARDS" infoNetwork="ETHEREUM" infoWhitelist="SCRATCH 2 GENESIS SCRATCHY CARD & 2 SEASON 1 SCRATCHY CARD TO MINT 1 SEASON 2 SCRATCHY CARD"
                                infoUtility="SCRATCH & WIN PRIZE"
                                infoPrize="MYSTERIOUS" />,
                            '3': <MintCard cardClass="scratchyCardEmpty" cardText="?" mintActivated={false} 
                                infoPrice="FREE MINT" infoType="SEASON 3 SCRATCHY CARD" infoDate="15 FEBRUARY 2023" infoTime="12PM UTC"
                                infoTotal="1,250 CARDS" infoNetwork="ETHEREUM"
                                infoWhitelist="???"
                                infoUtility="???"
                                infoPrize="???" />,
                            '4': <MintCard cardClass="scratchyCardEmpty" cardText="?" mintActivated={false} 
                                infoPrice="FREE MINT" infoType="SEASON 4 ONWARDS" infoDate="???" infoTime="???"
                                infoTotal="???" infoNetwork="ETHEREUM"
                                infoWhitelist="AMOUNT OF MINT BASED ON THE ??? GENESIS SCRATCHY CARD???"
                                infoUtility="???"
                                infoPrize="???" />,
                        } [subpage]
                    }
                </>
            )}
        </Row>
    );
}
export default Mint