import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'
import logo from './assets/Logo.png'
import mobileMenu from './assets/mobile/Menu.svg'

const Navbar = ({ menu, togglePopup, setMobileMenu }) => {
    
    const buttonLinkOnClick = async (elementId) => {
        console.log("buttonLinkOnClick: " + elementId)
        var ex = document.getElementById(elementId);
        ex.click();
    }
    
    return (
        <Row className="navigationRow">
            {/* MOBILE */}
            <div className="navbarMobileDiv displayMobile"> 
                <Row className="menuMobileCol">
                    <Col className="col-6">
                        <div className="homeMobileCol" onClick={() => buttonLinkOnClick('home')}>
                            <Image src={logo} className="homeMobileImage" />
                            <a href="/" id="home"></a>
                        </div>
                    </Col>
                    <Col className="col-6 menuMobileCol">
                        <Image src={mobileMenu} className="menuMobileImage" onClick={() => setMobileMenu(true)} />
                    </Col>
                </Row>
            </div>

            {/* DESKTOP */}
            <div className="displayDesktop">
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
            </div>
        </Row>
    );
}
export default Navbar