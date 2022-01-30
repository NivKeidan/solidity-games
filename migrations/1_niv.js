var NivContract = artifacts.require("NivContract");

module.exports = function (deployer) {
  deployer.deploy(NivContract);
};
