import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'

const Menu = ({togglePopup}) => {

    return (
        <Row className="popupBig">
            <Row className="m-0 p-0">
                <Row className="m-0 p-0">
                    <a href="/mint">MINT</a>
                </Row>
                <Row className="m-0 p-0 mb-5">
                    <a href="/scratch">SCRATCH</a>
                </Row>
                <Row className="m-0 p-0 mt-5">
                    <div className="mobileMenuButton" onClick={() => togglePopup(1)}>DISCORD?</div>
                </Row>
                <Row className="m-0 p-0">
                    <a href="https://twitter.com/scratchygg" target="_blank" >TWITTER</a>
                </Row>
            </Row>
        </Row>
    );
}
export default Menu