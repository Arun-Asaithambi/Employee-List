const User = require("../models/userSchema");
const bcrypt = require ("bcrypt");
const jwt = require('jsonwebtoken');

exports.registerUser = async(req, res)=>{
    const {username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10)
    const user = await User.create({
        username,
        email,
        password: hash
    });
    await user.save();
    res.status(200).json({message: "register successfully"})
}

exports.loginUser = async(req, res)=>{
        const {email, password} = req.body;
        const user = await User.findOne({ email });
        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });
  
        res.status(200).json({ token, user: { id: user._id, username: User.username, email: user.email} }); 
}

exports.logoutUser = (req, res) => {
    res.clearCookie('token').json({ message: 'Logged out successfully' });
};