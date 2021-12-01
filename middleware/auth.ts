//import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");

export default function auth(req: any, res: any, next: any) {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decryptToken = jwt.verify(token, "shhhhh");
    
    if (decryptToken.email === req.headers.email) {
      next();
    } else {
      res.status(400).send({error:"Le token n'est pas valide"})
    }
  } catch (e) {
    return e;
  }
}
