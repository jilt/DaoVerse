import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { MIN_DELAY } from '../helper-hardhat-config';
import {ethers} from 'hardhat';

const deployTimeLock: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {getNamedAccounts, deployments, network} = hre;
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();
    log("Deploying Timelock Contract...");

    const timelockContract = await deploy("TimeLock", {
        from: deployer,
        args: [MIN_DELAY, [], [ethers.ZeroAddress], deployer],
        log: true,
    });

    log(`Deployed DaoVerse token to address ${timelockContract.address}`)

};

export default deployTimeLock;