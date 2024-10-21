import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { BASE_URI } from '../helper-hardhat-config';
import {ethers} from 'hardhat';

async function main() {
    const daoVerse = await hre.ethers.deployContract("DaoVerse")
    await daoVerse.waitForDeployment()
  
    console.log(`DaoVerse contract deployed to ${await daoVerse.getAddress()}`)
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  
const deployDaoVerseToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {getNamedAccounts, deployments} = hre;
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();
    log("Deploying DaoVerse Token...");

    const daoverseToken = await deploy("DaoVerse", {
        from: deployer,
        args: [BASE_URI],
        log: true,
    })

    console.log(`Deployed DaoVerse token to address ${daoverseToken.address}`)

    console.log(`Delegating to ${deployer}`)
    await delegate(daoverseToken.address, deployer)
    console.log("Delegated!")
};

const delegate = async (daoverseTokenAddress: string, delegatedAccount: string) => {
    const daoverseToken = await ethers.getContractAt("DaoVerse", daoverseTokenAddress)
    const transactionResponse = await daoverseToken.delegate(delegatedAccount)
    await transactionResponse.wait(1)
}

export default deployDaoVerseToken;