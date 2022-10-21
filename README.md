# This is an example of using cross chain ERC721 minting using Layer Zero
![Layer Zero](/Layer_Zero_Logo_Black%20(1).svg)

## Layerzero testnet endpoint and chainid 
https://layerzero.gitbook.io/docs/technical-reference/testnet/testnet-addresses

for my example
- Mumbai Layer Zero
ChainId: 10109
Endpoint: 0xf69186dfBa60DdB133E91E9A4B5673624293d8F8
-----------------

- Goerli Layer Zero
ChainId: 10121
Endpoint: 0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23
------------------

## Required file
1. Layer zero interfaces - here i am using some required file for me in **contract/interfaces** folder
You can find these interfaces here
https://github.com/LayerZero-Labs/solidity-examples/tree/main/contracts/interfaces
and other related files
https://github.com/LayerZero-Labs/solidity-examples/tree/main/contracts

2. Contract you can find on Contract folder with file named OmniChainNFT.sol

## test step by step
1. deploy contract in goerli
npx hardhat run .\scripts\deploy_nft_goerli.js --network goerli

2. deploy contract in mumbai
npx hardhat run .\scripts\deploy_nft_mumbai.js --network mumbai

3. update deployed contract address on test/mint_goerli.js and test/mint_mumbai.js as per their deployed adderess

4. Now mint one item in goerli
npx hardhat run .\tests\mint_goerli.js --network goerli

5. Now transfer minted token from georli to mumbai testnet
npx hardhat run .\tests\transfer_goerli.js --network goerli

6. Now check generated transaction no.
In my example , generated txn no is 
**0x7b0ab7b2fb55d4c290f7190bff5441d7fe3895d92dc527e562250cb08e3b44eb in https://goerli.etherscan.io/address/0xFB2368e7EDFc61BD91B3a4731a9a212EF4ddE2Ae**
after few minutes , you can see another transaction of minting new item from 0x00 to your mumbai contract.
In my example - **https://mumbai.polygonscan.com/token/0xFB2368e7EDFc61BD91B3a4731a9a212EF4ddE2Ae**


## On every transaction you need to pass some ether to layerzero, so they can pay fee for your transaction from backend
## required fee you can calculate like below code and pass with value option
  
> const fees = await OmniChainNFT.estimateFees(
>    10109, // mumbai chain 
>    "0xe3c446c818cc48Dc230742A1CC556f054c7C5dE8", // mumbai endpoint
>    formatBytes32String("Hello LayerZero"), //message to layerzero
>    false, //for this read documentation https://layerzero.gitbook.io/docs/guides/advanced
>    [] //for this read documentation https://layerzero.gitbook.io/docs/guides/advanced
>  );
> console.log(ethers.utils.formatEther(fees[0].toString()), fees); //pass fees on crossChain Function
>
>> //i was facing gas issue so did not used, gas issue you can only face on polygon transaction


