require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORTSERVER || 7500,
  },
  jwtConfig: {
    secretKey: process.env.SECRET_KEY_JWT,
    expiresIn: process.env.EXPIRESINJWT,
  },
  cookies: {
    httpOnly: process.env.HTTPONLYCOOKIE,
    maxAge: process.env.MAXAGECOOKIE,
  },
  cfMongoose: {
    mongoose_link_db: process.env.MONGOOSE_LINK_DB,
  },
  cfEmailjs: {
    public_key: process.env.PUBLIC_KEY_EMAILJS,
    service_id: process.env.SERVICE_ID_EMAILJS,
    template_id: process.env.TEMPLATE_ID_EMAILJS,
  },
};
