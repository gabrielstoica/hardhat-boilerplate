import { ethers } from "hardhat";

async function updateValue() {
  const box = await ethers.getContract("Box");

  console.log(`Updating Box contract`);
  console.log(`-----------------------------`);

  const tx = await box.updateValue(5);
  await tx.wait();

  console.log("Box's value successfully updated!");
}

updateValue()
  .then(() => process.exit(0))
  .catch((error) => {
    if (error.reason) console.log(error.reason);
    else console.log(error);
    process.exit(1);
  });
