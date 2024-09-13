// generating hascode

import bcrypt from "bcryptjs";

let password = "Rohansrjr@11";

let hashedPassword = await bcrypt.hash(password, 10);

// same text/ password has different hash code


console.log(hashedPassword);

// compare hashCode


let loginPassword = "Rohansrjr@11"

let isValidPassword = await bcrypt.compare(loginPassword, hashedPassword);

console.log(isValidPassword);