import { verify } from "jsonwebtoken";

export default function auth(req: any, res: any, next: any) {
  const token = req.headers.authorization.split(" ")[1];
  console.log(req.headers.email);
  try {
    const decryptToken = verify(token, "shhhhh");
    if (Object.values(decryptToken)[1] === req.headers.email) {
      next();
    } else {
      res.status(400).send({ error: "Le token n'est pas valide" });
    }
  } catch (e) {
    console.log("la");
    return e;
  }
}
