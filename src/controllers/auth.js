const users = [
  {
    id: 1,
    fullname: "Admin",
    email: "admin@mail.com",
  },
];
const token = "0sdnOJIoinsdo9878IJNBIniiuinINiuYIUY";

exports.login = async (req, res) => {
  try {
    const { fullname, email } = req.body;
    const user = users.map((item) => {
      if (item.fullname == fullname) {
        if (item.email == email) {
          return {
            fullname: item.fullname,
            email: item.email,
            token,
          };
        }
      }
      return;
    });
    res.status(200).send({
      status: "success",
      data: {
        user,
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
    const { fullname, email } = req.body;
    const user = { id: "", fullname, email };
    users.push(user);
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
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};
