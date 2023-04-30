// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Authenticator {
    address public authorizedUser;

    function authorize(address _user) public {
        authorizedUser = _user;
    }

    function isAuthorized() public view returns (bool) {
        return msg.sender == authorizedUser;
    }
}
