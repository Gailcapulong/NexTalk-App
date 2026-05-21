// todo
import "dotenv/config";

export const ENV = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  CLIENT_URL: process.env.CLIENT_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
};

//PORT=3000
//MONGO_URI=mongodb+srv://gailcapulong77_db_user:l3D6LxXElKFnGVyE@cluster0.torfxuh.mongodb.net/nextalk_db?appName=Cluster0

//NODE_ENV=development

//JWT_SECRET=myjstsecret

//RESEND_API_KEY=re_i6by5XX8_FEEsfkGsYzTuDRaJbvTDVACt

//EMAIL_FROM="onboarding@resend.dev"
//EMAIL_FROM_NAME="Jennifer Cuni"

//CLIENT_URL=http://localhost:5173
