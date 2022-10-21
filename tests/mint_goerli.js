const hre = require("hardhat");
async function main() {
  const account = "0xB76f98F1Efd7Da4f2b0C941C4db78900e7540dB7" //creator wallet address
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x8CbDC923d177E1268dB759CA34eF3265B78bAe5A" //generated / deployed contract address
  );
  let resp = await omniChainNFT.mint()
  resp.wait();
  const balance = await omniChainNFT.balanceOf(account);
  console.log("goerli NFT balance: ", balance.toString());
  const owner = await omniChainNFT.ownerOf(1); //1 is token no.. just for test..it will give error if another token no. generated. pass correct token no.
  console.log("Token 1 owner: ", owner);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});