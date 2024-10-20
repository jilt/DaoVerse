import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {ethers} from 'hardhat';

const deployGovernorContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {getNamedAccounts, deployments, network} = hre;
    const {deploy, log, get} = deployments;
    const {deployer} = await getNamedAccounts();

    const daoVerseToken = await get("DaoVerse");
    const timeLock = await get("TimeLock")

    log("Deploying Governor Contract...");

    const governorContract = await deploy("DaoVerseGovernor", {
        from: deployer,
        args: [daoVerseToken.address, timeLock.address],
        log: true,
    });

    log(`Deployed Governor Contract to address ${governorContract.address}`)

};

export default deployGovernorContract;