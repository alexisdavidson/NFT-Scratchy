import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'
import logo from './assets/Logo.png'
import Mint from './Mint'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const Navbar = ({ web3Handler, account, price, supplyLeft, balance, closeMenu, 
    toggleMenu, menu, changeQuantity, mintButton, quantity }) => {

    const buttonOnClick = async (elementId) => {
        console.log("buttonLinkOnClick: " + elementId)
        var ex = document.getElementById(elementId);
        ex.click();
    }

    return (
        <Row className="navigationRow">
            <Col className="logoCol col-1">
                <a href="/" className="logo"><img src={logo} className="logoNavbarImg" /></a>
            </Col>
            <Col className="navigation m-0 p-0 col-10">
                <Row className="navigationLinksRow">
                    <Col className="navigationLinksColLeft col-6">
                        <div className="m-0 p-0">
                            <a href="/mint" className="navbarElement">Mint</a>
                        </div>
                        <div className="m-0 p-0">
                            <a href="/scratch" id="collectionLink" className="navbarElement">Scratch</a>
                        </div>
                    </Col>
                    <Col className="navigationLinksColRight col-6">
                        <div className="m-0 p-0">
                            <a href="/discord" className="navbarElement">Discord?</a>
                        </div>
                        <div className="m-0 p-0">
                            <a href="/twitter" className="navbarElement">Twitter</a>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default Navbar