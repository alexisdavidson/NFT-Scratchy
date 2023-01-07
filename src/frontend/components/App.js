import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import Home from './Home';

import { useState, useEffect, useRef } from 'react'
import { ethers } from 'ethers'

import NFTAbi from '../contractsData/NFT.json'
import NFTAddress from '../contractsData/NFT-address.json'
import configContract from "./configContract.json";

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const totalSupply = 5000

function App() {
  const [account, setAccount] = useState(null)
  const [balance, setBalance] = useState(0)
  const [supplyLeft, setSupplyLeft] = useState(totalSupply)
  const [price, setPrice] = useState(0.01)
  const [nft, setNFT] = useState({})
  const [menu, setMenu] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [amountMinted, setAmountMinted] = useState(0)
  const [provider, setProvider] = useState({})

  const providerRef = useRef();
  providerRef.current = provider;
  const quantityRef = useRef();
  quantityRef.current = quantity;
  const balanceRef = useRef();
  balanceRef.current = balance;
  const supplyLeftRef = useRef();
  supplyLeftRef.current = supplyLeft;
  const amountMintedRef = useRef();
  amountMintedRef.current = amountMinted;
  const nftRef = useRef();
  nftRef.current = nft;
  const accountRef = useRef();
  accountRef.current = account;

  const changeQuantity = (direction) => {
      if (quantity + direction < 1)
          setQuantity(1)
      else if (quantity + direction > 2)
          setQuantity(2)
      else
          setQuantity(quantity + direction)
  }

  const mintButton = async () => {
      console.log("mint button")
      let price = fromWei(await nft.getPrice()) * quantity;
      console.log("Price: " + price + " wei");
      console.log("Quantity: " + quantity)
      await nft.mint(quantity, { value: toWei(price) });
  }

  const closeMenu = () => {
      toggleMenu(0)
  }

  const toggleMenu = (menuId) => {
      console.log("toggleMenu " + menuId)
      if (menu == menuId)
          setMenu(0)
      else
          setMenu(menuId)
  }

  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    await loadContracts(accounts[0])
    
    setBalance(await nftRef.current.balanceOf(accounts[0]))
    setAccount(accounts[0])
    loadOpenSeaItems(accounts[0], nftRef.current)
  }

  const loadOpenSeaItems = async (acc, nft) => {
    let items = await fetch(`${configContract.OPENSEA_API}/assets?owner=${acc}&asset_contract_address=${nft.address}&format=json`)
    .then((res) => res.json())
    .then((res) => {
      return res.assets
    })
    .catch((e) => {
      console.error(e)
      console.error('Could not talk to OpenSea')
      return null
    })

    console.log(items)

    if (items != null && items.length > 0) {
      console.log("bean to use: " + items[0].token_id)
    }
    else 
      console.log("OpenSea could not find a bean for address " + acc)
  }

  const mintFinished = async (nft) => {
      console.log("mintFinished: " + quantityRef.current)
      setSupplyLeft(supplyLeftRef.current - quantityRef.current)
      setBalance(balanceRef.current + quantityRef.current)
      // setBeanToUse(amountMintedRef.current)
  }

  const loadContracts = async (acc) => {
    console.log("loadContracts")
    const providerTemp = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(providerTemp)
    const signer = providerTemp.getSigner()

    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
    const amountMintedTemp = parseInt(await nft.totalSupply()) + parseInt(await nft.burnAmount())
    setAmountMinted(amountMintedTemp)
    const supplyLeftTemp = totalSupply - amountMintedTemp
    console.log("tickets left: " + supplyLeftTemp)
    setSupplyLeft(supplyLeftTemp)
    setPrice(fromWei(await nft.getPrice()))
    setNFT(nft)
    nft.on("MintSuccessful", (user) => {
        console.log("MintSuccessful");
        console.log(user);
        console.log(acc);
        if (user.toLowerCase() == acc.toLowerCase()) {
          mintFinished(nft);
        }
    });

    console.log("nft address: " + nft.address)
  }
  

  useEffect(async () => {
    return () => {
      nft?.removeAllListeners("MintSuccessful");
    };
  }, [])

  return (
    <BrowserRouter>
      <div className="App" id="wrapper">
        <Home web3Handler={web3Handler} account={account} 
          supplyLeft={supplyLeft} balance={balance} closeMenu={closeMenu} toggleMenu={toggleMenu} menu={menu} price={price}
          changeQuantity={changeQuantity} mintButton={mintButton} quantity={quantity} >
        </Home>
      </div>
    </BrowserRouter>
  );
}

export default App;
