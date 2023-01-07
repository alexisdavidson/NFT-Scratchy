import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'
import logo from './assets/Logo.png'
import Mint from './Mint'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const Navbar = ({ menu, togglePopup }) => {

    return (
        <Row className="navigationRow">
            <Col className="logoCol col-1">
                <a href="/" className="logo"><img src={logo} className="logoNavbarImg" /></a>
            </Col>
            <Col className="navigation m-0 p-0 col-10">
                <Row className="navigationLinksRow">
                    <Col className="navigationLinksColLeft col-6">
                        <div className="m-0 p-0">
                            <a href="/mint" className="navbarElement">
                                {menu == 1 ? (
                                    <span className='selectedMenu'>Mint</span>
                                ) : (
                                    <>Mint</>
                                )}
                            </a>
                        </div>
                        <div className="m-0 p-0">
                            <a href="/scratch" id="collectionLink" className="navbarElement">
                                {menu == 2 ? (
                                    <span className='selectedMenu'>Scratch</span>
                                ) : (
                                    <>Scratch</>
                                )}
                            </a>
                        </div>
                    </Col>
                    <Col className="navigationLinksColRight col-6">
                        <div className="m-0 p-0 popupButton" onClick={() => togglePopup('1')} >
                            Discord?
                        </div>
                        <div className="m-0 p-0">
                            <a href="https://twitter.com/" target="_blank" className="navbarElement">Twitter</a>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default Navbar