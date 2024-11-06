pragma circom  2.2.0;

template IsZero() {
    signal input in;
    signal output out;

    signal inv;

    inv <-- in!=0 ? 1/in : 0;

    out <== -in*inv +1;
    in*out === 0;
}

template RoleVerification() {

    // Declaration of signals.
    signal input userRoleHash; // private input
    signal input targetRoleHash; // public input
    signal output isAuthorized;

    component isz = IsZero();

    isz.in <== userRoleHash - targetRoleHash;
    // Constraints.
    isAuthorized <== isz.out;
}

component main = RoleVerification();
