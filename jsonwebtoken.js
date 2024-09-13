import jwt from "jsonwebtoken";

// Generating token

/* 
let infoObj = {
    id: 9876,
};

let secretKey = "rohandon11";

let expiryDate = {
    // expiryInfo must be in same format
    expiresIn: "12d",
};

let token = jwt.sign(infoObj, secretKey, expiryDate);
console.log(token); */


// Verify token



/* let token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTg3NiwiaWF0IjoxNzIyMTU1NTA3LCJleHAiOjE3MjIxOTg3MDd9.jH0T72TW2P5zko5S7Tljdfl0dCx1FKq6jmZ_f1qBA0E";

try {
    let infoObj = jwt.verify(token1, "rohandon11");
    // To be verified token, a token must be made from given secretkey, and it should not exceed expiryInfo. 
    console.log(infoObj);
} catch (error) {
    console.log(error.message);
} */