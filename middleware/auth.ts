//import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");

export default function auth(req: any, res: any, next: any) {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decryptToken = jwt.verify(token, "shhhhh");
    
    if (decryptToken.email === req.headers.email) {
      next();
    } else {
      console.log("sqd");
    }
  } catch (e) {
    return e;
  }
}
