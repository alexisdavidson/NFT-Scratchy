import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'
import coinLogo from './assets/Coin.png'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const Scratch = ({ togglePopup }) => {
    const [submenu, setSubmenu] = useState(1)

    return (
        <Row className="m-0 p-0 mt-5 scratch">
            <div className="m-0 p-0 subNavbarRow">
                <div className={"subNavbarMenu " 
                    + (submenu == 1 ? "selectedSubmenu " : " ") 
                    + (submenu == 1 ? " " : "subNavbarMenuNotSelected ")}>
                    No Genesis Scratchy Card
                </div>

                <div className="coinDiv" onClick={() => togglePopup(2)}>
                    <div><img src={coinLogo} className="logoNavbarImg" /></div>
                    <div className={"subCoinMenu"}>0</div>
                </div>
            </div>

            <div className="scratchCardContainer">
                <div className="scratchyCard scratchyCardEmpty">
                    <div>You don't have any<br/>Scratchy Card</div>
                </div>
            </div>

        </Row>
    );
}
export default Scratch