// SPDX-License-Identifier: MIT
pragma solidity >=0.8.11;

contract NivContract {
  mapping(address => AccountOwner) public ledger;

  uint8 constant startingAmount = 10;
  address owner;

  struct AccountOwner {
    bool isActive;
    uint256 balance;
  }

  constructor() {
    // populate owner
  }


  function hello() public {
    // validate not exists
    // add to ledger with 0 balance
  }

  function transfer(address to, uint256 amount) public payable {
    // validate existence of all parties
    // if owner, have endless money
    // deduct money, add money
  }

}
