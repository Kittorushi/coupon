const Authenticator = artifacts.require("Authenticator");

module.exports = async function (deployer, network, accounts) {
    // Deploy the contract
    await deployer.deploy(Authenticator);
    const authenticator = await Authenticator.deployed();

    console.log("Contract address:", authenticator.address);
};
