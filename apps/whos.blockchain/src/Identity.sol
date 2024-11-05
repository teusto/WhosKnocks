// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

contract Identity {
    struct User {
        address userAddress;
        bytes32 name;
        bytes32 role;
        bool isActive;
    }
    mapping(address => User) private users;
    mapping(address => bytes32) private userRoles;

    bytes32 public constant ROLE_ADMIN = keccak256("Admin");
    bytes32 public constant ROLE_EMPLOYEE = keccak256("Employee");
    bytes32 public constant ROLE_VISITOR = keccak256("Visitor");

    event UserRegistered(address indexed userAddress, bytes32 name, bytes32 role);
    event RoleAssigned(address indexed userAddress, bytes32 role);
    event UserDeactivated(address indexed userAddress);

    modifier onlyRole(bytes32 requiredRole) {
        require(
            userRoles[msg.sender] == requiredRole,
            "Access Denied: Insufficient permissions"
        );
        _;
    }

    function registerUser() {}

    function getUser() {}
    function hasPermission(){}
    function deactivateUser() {}
    function revokeUserPermission() {}
    function givePermissionTo() {}
}
