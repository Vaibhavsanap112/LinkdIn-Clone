require("dotenv").config(); // Load environment variables

const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const ExtractJwt = require("passport-jwt").ExtractJwt;
const JwtStrategy = require("passport-jwt").Strategy;
const authRoutes = require("./Routes/auth");
const User = require("./Models/User");
const bcrypt = require('bcryptjs');
const { getToken } = require("./utils/helpers");
const experienceRoutes = require("./Routes/experience")
const skillRoutes = require("./Routes/Skill");
const projectRoutes = require("./Routes/project");
// Add this line in index.js




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing url-encoded request bodies (if you're using form submissions)




// ✅ Debugging: Check if MONGO_PASSWORD is loaded
if (!process.env.MONGO_PASSWORD) {
  console.error("❌ MONGO_PASSWORD is not defined! Check your .env file.");
  process.exit(1); // Exit if no password is set
}

const mongoURI = `mongodb+srv://Vaibhavs:${process.env.MONGO_PASSWORD}@cluster0.doxa9.mongodb.net/myDatabase?retryWrites=true&w=majority`;

// ✅ Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log("✅ Connected to MongoDB!"))
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });

// ✅ Passport JWT setup
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisisaclone";

passport.use(
  new JwtStrategy(opts,async function(jwt_payload,done){
    try{
      const user = await User.findOne({_id:jwt_payload.identifier});
      if(user){
        done(null,user);
      }
      else{
        dont(null,false)
      }

    }catch(err){
      if(err){
        done(err,false)
      }

    }
  })
);


app.get("/", (req, res) => res.send("Server is running"));

app.use("/auth",authRoutes);
app.use("/experience",experienceRoutes);
app.use("/skills",skillRoutes);
app.use("/project",projectRoutes);


app.listen(8000, () => console.log("🚀 Server running on port 8000"));

