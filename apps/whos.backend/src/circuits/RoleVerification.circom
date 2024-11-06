template RoleVerification() {

    // Declaration of signals.
    signal input userRoleHash; // private input
    signal input targetRoleHash; // public input
    signal output isAuthorized;

    // Constraints.
    isAuthorized <== (userRoleHash === targetRoleHash);
}

component main = RoleVerification();
