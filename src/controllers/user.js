const users = [
  {
    id: 1,
    fullname: "Admin",
    email: "admin@mail.com",
  },
];

exports.getAllUsers = async (req, res) => {
  try {
    res.status(200).send({
      status: "success",
      data: {
        user: users,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    users.splice(id - 1, 1);
    res.status(200).send({
      status: "success",
      data: {
        id,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};
