const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.getUsers = async (req, res) => {
  const list = await User.find();
  res.json(list);
};
