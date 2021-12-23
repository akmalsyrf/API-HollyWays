// const funds = [
//   {
//     id: 1,
//     title: "The strength of poeple power of the community",
//     thumbnail: "people-power.png",
//     goal: 20000000,
//     description: "Lorem Ipsum is simply dummy text of the printing",
//     usersDonate: [
//       {
//         id: 1,
//         fullname: "Admin",
//         email: "admin@mail.com",
//         donateAmount: 100000,
//         status: "pending",
//         proofAttachment: "bca-transfer.png",
//       },
//     ],
//   },
// ];

const { fund, payment, user } = require("../../models");

exports.getAllFunds = async (req, res) => {
  try {
    const data = await fund.findAll({
      include: [
        {
          model: payment,
          as: "userDonate",
          attributes: { exclude: ["idUser", "idFund", "createdAt", "updatedAt"] },
        },
      ],
      attributes: { exclude: ["idUser", "createdAt", "updatedAt"] },
    });
    res.status(200).send({
      status: "success",
      data: {
        funds: data,
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

exports.getFund = async (req, res) => {
  try {
    const { id } = req.params;
    const data = fund.findOne({
      where: { id },
      include: [
        {
          model: payment,
          as: "userDonate",
          attributes: { exclude: ["idUser", "idFund", "createdAt", "updatedAt"] },
        },
      ],
      attributes: { exclude: ["idUser", "createdAt", "updatedAt"] },
    });
    res.status(200).send({
      status: "success",
      data: {
        fund: data,
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
    const data = await fund.create(req.body);
    res.status(200).send({
      status: "success",
      data: {
        fund: { ...data.dataValues, userDonate: [] },
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
    await fund.update(req.body, { where: { id } });
    const data = fund.findOne({
      where: { id },
      include: [
        {
          model: payment,
          as: "userDonate",
          attributes: { exclude: ["idUser", "idFund", "createdAt", "updatedAt"] },
        },
      ],
      attributes: { exclude: ["idUser", "createdAt", "updatedAt"] },
    });
    res.status(200).send({
      status: "success",
      data: {
        fund: data,
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
    const data = await fund.destroy({ where: { id } });
    res.status(200).send({
      status: "success",
      data: {
        id: data,
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

    await payment.update(req.body, { where: { idFund: fundId, id: userId } });
    const data = payment.findOne({
      where: { id: userId },
      attributes: { exclude: ["idUser", "idFund", "createdAt", "updatedAt"] },
    });
    res.status(200).send({
      status: "success",
      data: {
        fund: data,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};
