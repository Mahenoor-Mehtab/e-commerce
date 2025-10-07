import jwt from "jsonwebtoken";

const isAuth = async (req, res,next) => {
  try {
    let { token } = req.cookies;
   
    if (!token)
      return res.status(400).json({ message: "user does not have token" });

    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken)
      return res
        .status(400)
        .json({ message: "user does not have a valid token " });

    req.userId = verifyToken.userId;   // userId ko request object me attach kar diya
    next();
  } catch (error) {
    return res.status(500).json(`{message: ${error.message}}`)
  }
};

export default isAuth;

// yaha kya horaha h ki ko frontend se tokenaata h fhir usse heade +payload +signature milta h aur header + payload se plus secret key se generate new signature generate karate h aur old se match karte h ki match ho raha h ki nhi
