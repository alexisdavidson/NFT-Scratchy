import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'

const Menu = ({togglePopup}) => {

    const buttonLinkOnClick = async (elementId) => {
        console.log("buttonLinkOnClick: " + elementId)
        var ex = document.getElementById(elementId);
        ex.click();
      }
    
    return (
        <Row className="popupBig">
            <Row className="m-0 p-0">
                <Row className="m-0 p-0">
                    <div className="mobileMenuButton" onClick={() => buttonLinkOnClick('openseaLink')}>MINT</div>
                </Row>
                <Row className="m-0 p-0">
                    <div className="mobileMenuButton" onClick={() => buttonLinkOnClick('twitterLink')}>SCRATCH</div>
                </Row>
                <Row className="m-0 p-0">
                    <div className="mobileMenuButton" onClick={() => togglePopup(1)}>DISCORD?</div>
                </Row>
                <Row className="m-0 p-0">
                    <div className="mobileMenuButton" onClick={() => buttonLinkOnClick('aboutusLink')}>TWITTER</div>
                </Row>
            </Row>
        </Row>
    );
}
export default Menu