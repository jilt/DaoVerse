import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {ethers} from 'hardhat';

const rentingMarketplace: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {getNamedAccounts, deployments, network} = hre;
    const {deploy, log, get} = deployments;
    const {deployer} = await getNamedAccounts();

    

    console.log("Deploying RentRoom...");

    const rentRoom = await deploy("RentRoom", {
        from: deployer,
        args: [],
        log: true,
    });

    const timeLock = await ethers.getContract("TimeLock");
    const rentRoomContract = await ethers.getContractAt("RentRoom", rentRoom.address);
    const transferOwnerTx = await rentRoomContract.getFunction("transferOwnership")( await timeLock.getAddress())
    await transferOwnerTx.wait(1);

    console.log(`Deployed rentRoom to address ${rentRoom.address}`)

};

export default rentingMarketplace;