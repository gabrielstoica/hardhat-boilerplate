# Hardhat Boilerplate

Simple boilerplate for getting started quickly developing Hardhat projects.

## Installation

1. Clone this repository to your local machine:
```bash
git clone https://github.com/gabrielstoica/hardhat-boilerplate
```
2. Change directory to the cloned project:
```bash
cd hardhat-boilerplate
```
3. Install dependencies:
```bash
yarn install
```
4. Update the `hardhat.config.js` file and `.env` with your deployment configurations and network settings, such as `PRIVATE_KEY`, `INFURA_API_KEY` or `POLYGONSCAN_API_KEY`.
5. Compile the contracts:
```bash
yarn hardhat compile
```
6. Deploy the Box contract to the localhost or a live network by using the hardhat-deploy plugin:
```bash
yarn hardhat deploy
```

## Contributing

Contributions to this Hardhat boilerplate template are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.
