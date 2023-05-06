import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { verify } from "../utils";

const deployBox: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, network, deployments } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const signer = ethers.provider.getSigner(deployer);
  const deployerBalance = await signer.getBalance();

  console.log("Deploying from address: ", deployer);
  console.log("Account balance:", ethers.utils.formatEther(deployerBalance));

  const box = await deploy("Box", {
    from: deployer,
    args: [],
    log: true,
  });

  console.log(`Box deployed at ${box.address}`);

  if (network.live) {
    console.log(`Sent for verification...`);
    await verify(box.address, []);
    console.log(`Successfully verified!`);
  }
};

export default deployBox;
