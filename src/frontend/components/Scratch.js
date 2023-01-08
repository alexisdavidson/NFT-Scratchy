import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const Scratch = ({ togglePopup }) => {
    const [submenu, setSubmenu] = useState(1)

    return (
        <div className="m-0 p-0 mt-5 scratch">
            <div className={"subNavbarMenu " 
                + (submenu == 1 ? "selectedSubmenu " : " ") 
                + (submenu == 1 ? " " : "subNavbarMenuNotSelected ")}>
                No Genesis Scratchy Card
            </div>

            <div className="scratchyCard scratchyCardEmpty">You don't have any<br/>Scratchy Card</div>
        </div>
    );
}
export default Scratch