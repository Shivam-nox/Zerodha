const { Signup, Login } = require("../Controller/AuthController");
const { verifyUser } = require("../Middleware/AuthMiddleware");
const router = require("express").Router();
const User = require("../model/UserModel");

router.post("/Signup", Signup);
// backend/routes/auth.js (or wherever your login route is)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // ✅ Send username back
    res.json({
      success: true,
      message: "Login successful",
      username: user.username,   // 👈 send username
    });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Server error" });
  }
});

router.get("/dashboard", verifyUser, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;

// const express = require('express'); // ✅ Correct way
// const router = express.Router();

// const AuthController = require('../Controller/AuthController');

// router.post('/login', AuthController.login); // ✅ Make sure login is a function

// module.exports = router;
