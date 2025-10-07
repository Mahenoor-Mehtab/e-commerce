import jwt from "jsonwebtoken";

const genToken =  (userId) => {
  try {
    const token =  jwt.sign({userId}, process.env.JWT_SECRET , {expiresIn:'7d'});
    return token;
  } catch (error) {
    console.log(error);
  }
};

export default genToken;

export const genToken1 =  (email) => {
  try {
    const token =  jwt.sign({email}, process.env.JWT_SECRET , {expiresIn:'7d'});
    return token;
  } catch (error) {
    console.log(error);
  }
};



