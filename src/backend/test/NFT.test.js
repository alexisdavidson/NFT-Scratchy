const { expect } = require("chai")
const helpers = require("@nomicfoundation/hardhat-network-helpers")

const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => parseInt(ethers.utils.formatEther(num))

describe("NFT & Planting", async function() {
    let deployer, addr1, addr2, nft
    let price = 0.01

    beforeEach(async function() {
        // Get contract factories
        const NFT = await ethers.getContractFactory("NFT");

        // Get signers
        [deployer, addr1, addr2, addr3] = await ethers.getSigners();
        whitelist = [addr1.address, addr2.address, addr3.address]

        // Deploy contracts
        nft = await NFT.deploy();
    });

    describe("Deployment", function() {
        it("Should track name and symbol of the nft collection", async function() {
            expect(await nft.name()).to.equal("Beanstalker")
            expect(await nft.symbol()).to.equal("BEAN")
        })
    })

    describe("Mint", function() {
        it("Should mint NFTs correctly", async function() {
            await expect(nft.connect(addr1).mint(1, { value: toWei(price)})).to.be.revertedWith('Minting is not enabled');
            await nft.connect(deployer).setMintEnabled(true);

            await expect(nft.connect(addr1).mint(3, { value: toWei(price * 3)})).to.be.revertedWith('Each address may only mint x NFTs!');
            await expect(nft.connect(addr1).mint(10000, { value: toWei(price)})).to.be.revertedWith('Cannot mint more than max supply');
            await expect(nft.connect(addr1).mint(1)).to.be.revertedWith('Not enough ETH sent; check price!');

            await nft.connect(addr1).mint(1, { value: toWei(price)});
            expect(await nft.balanceOf(addr1.address)).to.equal(1);
            expect(await nft.totalSupply()).to.equal(1);

            await expect(nft.connect(addr3).mint(2, { value: toWei(price * 2)})).to.be.revertedWith('Each address may only mint x NFTs!');
        })
        it("Should perform owner functions", async function() {
            let newAmountMintPerAccount = 10
            let newPrice = 0

            await expect(nft.connect(addr1).setMintEnabled(true)).to.be.revertedWith('Ownable: caller is not the owner');
            await expect(nft.connect(addr1).setAmountMintPerAccount(newAmountMintPerAccount)).to.be.revertedWith('Ownable: caller is not the owner');
            await expect(nft.connect(addr1).setPrice(newPrice)).to.be.revertedWith('Ownable: caller is not the owner');
            await expect(nft.connect(addr1).withdraw()).to.be.revertedWith('Ownable: caller is not the owner');
            
            await nft.connect(deployer).setAmountMintPerAccount(newAmountMintPerAccount);
            expect(await nft.amountMintPerAccount()).to.equal(newAmountMintPerAccount);
            await nft.connect(deployer).setPrice(newPrice);
            expect(await nft.getPrice()).to.equal(newPrice);
        })
    })
    
})