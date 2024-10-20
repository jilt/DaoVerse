import { ethers, network } from "hardhat";
import { VOTING_PERIOD, developmentChains, FUNC, NEW_PERCENTAGE_FEE, PROPOSAL_DESCRIPTION, MIN_DELAY} from "../helper-hardhat-config";
import * as fs from "fs";
import { moveBlocks } from "../utils/move-blocks";
import { moveTime } from "../utils/move-time";

const index = 0;

export async function queueAndExecute(proposalIndex: number) {
    const args = [NEW_PERCENTAGE_FEE];
    const rentRoom = await ethers.getContract("RentRoom");
    const governor = await ethers.getContract("DaoVerseGovernor");

    const encodedFunctionCall = rentRoom.interface.encodeFunctionData(FUNC, args);
    const descriptionHash = ethers.keccak256(ethers.toUtf8Bytes(PROPOSAL_DESCRIPTION));

    console.log("Queueing...");

    const queueTx = await governor.getFunction("queue")(
        [rentRoom.getAddress()],
        [0],
        [encodedFunctionCall],
        descriptionHash
    );
    await queueTx.wait(1);

    if(developmentChains.includes(network.name)){
        await moveTime(MIN_DELAY + 1);
        await moveBlocks(1);
    }    

    console.log("Executing...");
    const executeTx = await governor.getFunction("execute")(
        [rentRoom.getAddress()],
        [0],
        [encodedFunctionCall],
        descriptionHash
    );
    await executeTx.wait(1);

    const rentRoomNewFee = await rentRoom.getFunction("getFeePercentage")();
    console.log(`New Fee value: ${rentRoomNewFee.toString()}`)
}

queueAndExecute(index)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })