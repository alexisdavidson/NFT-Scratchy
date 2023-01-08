import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'
import MintCard from './MintCard'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const Mint = ({  }) => {
    const [submenu, setSubmenu] = useState(1)
    const [subpage, setSubpage] = useState(1)

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
                <MintCard mintActivated={false} cardClass="scratchyCardGenesis" 
                    infoPrice="FREE MINT (2 PER WALLET)" infoDate="15 JANUARY 2023" infoTime="12PM UTC"
                    infoTotal="10,000 CARDS" infoNetwork="ETHEREUM" infoWhitelist="NO / FCFS" infoUtility="PROOF OF SCRATCH"
                    infoPrize="FREE MINT SPOT FOR SEASONAL SCRATCHY CARD"
                    infoRoadmap="CLICK 'SEASONAL SCRATCHY CARD' BUTTON ABOVE" />
            ) : (
                <>
                    {
                        {
                            '1': <MintCard cardClass="scratchyCard1" />,
                            '2': <MintCard cardClass="scratchyCard2" />,
                            '3': <MintCard cardClass="scratchyCardEmpty" cardText="?" />,
                            '4': <MintCard cardClass="scratchyCardEmpty" cardText="?" />,
                        } [subpage]
                    }
                </>
            )}
        </Row>
    );
}
export default Mint