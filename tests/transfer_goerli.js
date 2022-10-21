const hre = require("hardhat");
const { ethers } = require("ethers");

//transferring token from georli to mumbai
async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x8CbDC923d177E1268dB759CA34eF3265B78bAe5A" //goerli contract address
  );

  //trusted remote must contains destination contract address and source contract address
  let trustedRemote = hre.ethers.utils.solidityPack(
    ['address','address'],
    ["0xFB2368e7EDFc61BD91B3a4731a9a212EF4ddE2Ae", "0x8CbDC923d177E1268dB759CA34eF3265B78bAe5A"]
  )

  //cross chain is the function to transfer token from one chain to another using layerzero
  //in contract abi
  //contains three parameter , destination layer zero endpoint chain id, destination address trusted remote array
  // and token no, to transfer
  let res = await omniChainNFT.crossChain(
    10109, //mumbai layerzero chain id
    trustedRemote,
    ethers.BigNumber.from("5"), //token no. i tested last time
    { value: ethers.utils.parseEther("0.01") }
  );

  console.log(res)
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});