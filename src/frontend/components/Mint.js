import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const Mint = ({  }) => {
    const [submenu, setSubmenu] = useState(1)

    return (
        <div className="m-0 p-0 mint">
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
            Mint
        </div>
    );
}
export default Mint