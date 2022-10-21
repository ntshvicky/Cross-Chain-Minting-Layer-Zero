const hre = require("hardhat");

async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.deploy(
    "0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23", //goerli adderess you can find here - https://layerzero.gitbook.io/docs/technical-reference/testnet/testnet-addresses#goerli-ethereum-testnet
    "0", // start from token no
    "100" //set maximum token allowed to mint in this contract
  );
  await omniChainNFT.deployed();
  console.log("OmniChainNFT -- goerli deployed to:", omniChainNFT.address); //use this address on minting and transfer
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});