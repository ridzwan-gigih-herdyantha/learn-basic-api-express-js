const usersModel = require("../models/users");
const getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModel.getAllUsers();
    res.json({
      message: "Get All User Succeed",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const createnewUser = async (req, res) => {
  console.log(req.body);
  const { body } = req;
  try {
    await usersModel.createNewUser(body);
    res.json({
      message: "Create New User Succeed",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await usersModel.updateUser(body, idUser);
    res.json({
      message: "Update user succed",
      data: {
        id: idUser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await usersModel.deleteUser(idUser);
    res.json({
      message: "Delete user succed",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createnewUser,
  updateUser,
  deleteUser,
};
