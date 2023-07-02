const User = require('../models/User');

async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('*-------[User Controller] error getting all Users', error);
    res.status(500).json({ message: '*-------[User Controller] Error getting Users' });
  }
}

async function createUser(req, res) {
  try {
    const { name, email, address, phoneNumber, dateOfBirth } = req.body;
    const user = await User.create({ name, email, address, phoneNumber, dateOfBirth });
    res.json(user);
  } catch (error) {
    console.error('*-------[User Controller] ', error);
    res.status(500).json({ message: '*-------[User Controller] Error creating User' });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email, address, phoneNumber, dateOfBirth } = req.body;
    const user = await User.findByPk(id);
    
    if (!user) {
      return res.status(404).json({ message: '*-------[User Controller] User not found' });
    }
    
    user.name = name;
    user.email = email;
    user.address = address;
    user.phoneNumber = phoneNumber;
    user.dateOfBirth = dateOfBirth;
    
    await user.save();
    
    res.json(user);
  } catch (error) {
    console.error('*-------[User Controller] ', error);
    res.status(500).json({ message: '*-------[User Controller] Error updating User' });
  }
}

async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    
    if (!user) {
      return res.status(404).json({ message: '*-------[User Controller] User not found' });
    }
    
    await user.destroy();
    
    res.json({ message: '*-------[User Controller] User deleted successfully' });
  } catch (error) {
    console.error('*-------[User Controller] ', error);
    res.status(500).json({ message: '*-------[User Controller] Error deleting User' });
  }
}

module.exports = { getUsers, createUser, updateUser, deleteUser };
