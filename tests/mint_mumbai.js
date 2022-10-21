require('dotenv').config()

const hre = require("hardhat");
async function main() {
  const account = "0x244a807084a3eb9fD5fE88Aa0b13AEC8401577Bd"; //creator wallet address
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0xFB2368e7EDFc61BD91B3a4731a9a212EF4ddE2Ae" //generated / deployed contract address
  );
  let resp = await omniChainNFT.mint()
  resp.wait();
  const balance = await omniChainNFT.balanceOf(account);
  console.log("mumbai NFT balance: ", balance.toString());
  const owner = await omniChainNFT.ownerOf(100); //100 is token no.. just for test..it will give error if another token no. generated. pass correct token no.
  console.log("Token 1 owner: ", owner);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});