import { expect } from "chai";
import { deployments } from "hardhat";
import { Box } from "../typechain-types";

const setupTest = deployments.createFixture(async ({ deployments, getNamedAccounts, ethers }, options) => {
  await deployments.fixture(); // ensure you start from a fresh deployments
  const { deployer } = await getNamedAccounts();

  const BoxContract = await ethers.getContract("Box", deployer);
  const tx = await BoxContract.updateValue(5);
  await tx.wait();

  return BoxContract;
});

describe("Box", function () {
  let BoxContract: Box;

  beforeEach(async function () {
    BoxContract = <Box>await setupTest();
  });

  it("Should deploy", async function () {
    const value = await BoxContract.getValue();
    expect(value).to.eq(5);
  });

  it("Should update the Box's value", async function () {
    const newValue = 10;
    await BoxContract.updateValue(newValue);
    const value = await BoxContract.getValue();
    expect(value).to.eq(newValue);
  });
});
