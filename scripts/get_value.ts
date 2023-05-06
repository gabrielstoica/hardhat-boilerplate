import { ethers } from "hardhat";

async function getValue() {
  const box = await ethers.getContract("Box");

  console.log(`Querying Box contract`);
  console.log(`-----------------------------`);

  const value = await box.getValue();

  console.log(`Value: ${value}`);
}

getValue()
  .then(() => process.exit(0))
  .catch((error) => {
    if (error.reason) console.log(error.reason);
    else console.log(error);
    process.exit(1);
  });
