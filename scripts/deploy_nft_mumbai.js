const hre = require("hardhat");

async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.deploy(
    "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8", //goerli adderess you can find here - https://layerzero.gitbook.io/docs/technical-reference/testnet/testnet-addresses#mumbai-polygon-testnet
    "100", // start from token no
    "200" //set maximum token allowed to mint in this contract
  );
  await omniChainNFT.deployed();
  console.log("OmniChainNFT -- mumbai deployed to:", omniChainNFT.address); //use this address on minting and transfer
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});