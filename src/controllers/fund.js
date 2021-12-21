const funds = [
  {
    id: 1,
    title: "The strength of poeple power of the community",
    thumbnail: "people-power.png",
    goal: 20000000,
    description: "Lorem Ipsum is simply dummy text of the printing",
    usersDonate: [
      {
        id: 1,
        fullname: "Admin",
        email: "admin@mail.com",
        donateAmount: 100000,
        status: "pending",
        proofAttachment: "bca-transfer.png",
      },
    ],
  },
];

exports.getAllFunds = async (req, res) => {
  try {
    res.status(200).send({
      status: "success",
      data: {
        funds,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.getFund = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send({
      status: "success",
      data: {
        fund: funds.find((item) => item.id == id),
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.addFund = async (req, res) => {
  try {
    const { title, thumbnail, goal, description } = req.body;
    funds.push(req.body);
    const usersDonate = [
      {
        id: 1,
        fullname: "Admin",
        email: "admin@mail.com",
        donateAmount: 100000,
        status: "pending",
        proofAttachment: "bca-transfer.png",
      },
    ];
    res.status(200).send({
      status: "success",
      data: {
        fund: {
          id: "",
          title,
          thumbnail,
          goal,
          description,
          usersDonate,
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

exports.editFund = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, thumbnail, goal, description } = req.body;
    funds.map((item) => {});
    const usersDonate = [
      {
        id: 1,
        fullname: "Admin",
        email: "admin@mail.com",
        donateAmount: 100000,
        status: "pending",
        proofAttachment: "bca-transfer.png",
      },
    ];
    res.status(200).send({
      status: "success",
      data: {
        fund: {
          id,
          title,
          thumbnail,
          goal,
          description,
          usersDonate,
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

exports.deleteFund = async (req, res) => {
  try {
    const { id } = req.params;
    funds.splice(id - 1, 1);
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

exports.editUserDonateByFund = async (req, res) => {
  try {
    const { fundId, userId } = req.params;
    const { fullname, email, donateAmount, status, proofAttachment } = req.body;

    res.status(200).send({
      status: "success",
      data: {
        fund: funds.map((item) => {
          if (item.id == fundId) {
            const newUserDonate = {
              id: userId,
              fullname,
              email,
              donateAmount,
              status,
              proofAttachment,
            };
            item.usersDonate.push(newUserDonate);
            return item;
          }
        }),
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};
