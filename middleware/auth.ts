//import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");

export default function auth(req: any, res: any, next: any) {
  const token = req.headers.authorization.split(" ")[1];
  console.log(req.headers.email);
  try {
    const decryptToken = jwt.verify(token, "shhhhh");
    console.log(decryptToken.email);

    if (decryptToken.email === req.headers.email) {
      console.log("ici");
      next();
    } else {
      console.log("sqd");
    }
  } catch (e) {
    console.log("la");
    return e;
  }
}
