export const shortenWalletAddress = (walletAddress) => {
    let shortenWalletAddress = walletAddress;
    
    if(walletAddress.length > 14)
        shortenWalletAddress = `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length-5, walletAddress.length)}`

    return shortenWalletAddress
}