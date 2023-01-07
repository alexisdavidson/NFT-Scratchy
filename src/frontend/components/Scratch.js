import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Button } from 'react-bootstrap'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const Scratch = ({  }) => {

    return (
        <div className="m-0 p-0 ">
            Scratch
        </div>
    );
}
export default Scratch