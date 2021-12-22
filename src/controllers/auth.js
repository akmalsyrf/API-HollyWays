const token = "0sdnOJIoinsdo9878IJNBIniiuinINiuYIUY";
const { user } = require("../../models");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await user.findOne({
      where: { email, password },
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    });
    res.status(200).send({
      status: "success",
      data: {
        user: { ...data.dataValues, token },
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};
exports.register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const data = { fullname, email, password };
    await user.create(data);
    res.status(200).send({
      status: "success",
      data: {
        user: {
          fullname,
          token,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};
