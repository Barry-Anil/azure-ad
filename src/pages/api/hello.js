
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

module.exports = async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  
  
  if (session) {
    res.send({
      data: {
        content:
          "HELLO. You can view this protected content because you are signed in!",
      },
    });
  } else {
    res.send({
      error: "Sorry... but you can't sit with us...",
    });
  }
};
