const Voting = artifacts.require("Voting");

module.exports = function(_deployer) {  _deployer.deploy(Voting);
};
