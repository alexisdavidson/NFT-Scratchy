import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'
import mintMinus from './assets/mintMinus.svg'
import mintPlus from './assets/mintPlus.svg'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const MintDiv = ({ account, web3Handler, nft, balance}) => {
    const [quantity, setQuantity] = useState(1)
    const [justMinted, setJustMinted] = useState(false)

    const changeQuantity = (direction) => {
        if (quantity + direction < 1)
            setQuantity(1)
        else if (quantity + direction > 2)
            setQuantity(2)
        else
            setQuantity(quantity + direction)
    }

    const mintButton = async () => {
        if (account == null) {
            await web3Handler();
            return
        }

        console.log("balance", balance)
        console.log("mintButton", quantity)
        // Try Gelato's method, with wait().wait() and not use listeners to confirm transaction
        let price = fromWei(await nft.getPrice()) * quantity;
        console.log("Price: " + price + " wei");
        console.log("Quantity: " + quantity)
        
        try {
            await(await nft.mint(quantity, { value: toWei(price) })).wait()
            setJustMinted(true)
        } catch (error) {
            console.error("Custom error handling: " + error);
            // document.getElementById("items-container-opensea").innerHTML = error
        }
    }

    const scratchIt = () => {
        console.log("scratchIt")
    }

    const sellOpensea = () => {
        console.log("sellOpensea")
    }

    return (
        <Row className="mintDescriptionMintActivated">
            {!(justMinted || balance >= 2) ? (
                <>
                    <Row className="m-auto p-0">
                        <div>10,000/10,000 CARDS LEFT</div>
                        <div className="quantitySelectorRow">
                            <div onClick={() => changeQuantity(-1)}><img src={mintMinus} className="minusPlusImage" /></div>
                            <div>{quantity}</div>
                            <div onClick={() => changeQuantity(1)}><img src={mintPlus} className="minusPlusImage" /></div>
                        </div>
                        {account ? (
                            <div className="mintButton" onClick={mintButton}>MINT FOR FREE</div>
                        ) : (
                            <div className="mintButton" onClick={mintButton}>CONNECT</div>
                        )}
                        
                    </Row>
                    <Row className="m-auto p-0">
                        <div>2 CARDS PER WALLET</div>
                        {account ? (
                            <div className="m-auto p-0">
                                {account.slice(0, 9) + '...' + account.slice(34, 42)}
                            </div>
                        ) : (
                            <></>
                        )}
                    </Row>
                </>
            ) : (
                <>
                    <Row className="m-auto p-0">
                        <div className="displayDesktopBlock" style={{textAlign: "left"}}>
                            CONGRATULATIONS! YOU'VE MINTED A GENESIS SCRATCH CARD. WHAT'S NEXT?
                        </div>
                        <div className="displayMobileBlock">MINTED! WHAT'S NEXT?</div>
                        <div className="wideButton" onClick={scratchIt}>SCRATCH IT</div>
                        <div className="wideButtonRed" onClick={sellOpensea}>SELL IT ON OPENSEA</div>
                        {account ? (
                            <div className="m-auto p-0">
                                {account.slice(0, 9) + '...' + account.slice(34, 42)}
                            </div>
                        ) : (
                            <></>
                        )}
                    </Row>
                </>
            )}
        </Row>
    );
}
export default MintDiv