import { ethers, network } from "hardhat";
import { NEW_PERCENTAGE_FEE, FUNC, PROPOSAL_DESCRIPTION, developmentChains, VOTING_DELAY, proposalsFile} from "../helper-hardhat-config";
import { moveBlocks } from "../utils/move-blocks";
import * as fs from "fs";

export async function mintNft(nftURI: string, nftArea: number, nftName: string) {
    const DaoVerse = await ethers.getContract("DaoVerse");
    
    console.log(`Minting an NFT`);

    const mintTx = await DaoVerse.getFunction("mint")(
        nftURI,
        nftArea,
        nftName
    )
    await mintTx.wait(1)

}

mintNft("/test1", 1234, "Test Room")
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })
