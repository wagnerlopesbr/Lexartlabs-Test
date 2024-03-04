const db = require("../models/index");
const auth = require("../../utils/auth");

const findAll = async () => {
  try {
    const users = await db.Users.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    if (!users || users.length === 0) {
      return {
        status: 404,
        data: {
          message: "Users not found",
        },
      };
    }
    return {
      status: 200,
      data: users,
    };
  } catch (error) {
    return {
      status: 500,
      data: {
        message: "Users Find All Error",
      },
    };
  }
};

const findById = async (id) => {
  try {
    const userById = await db.Users.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });
    if (!userById) {
      return {
        status: 404,
        data: {
          message: "User Id not found or does not exist",
        },
      };
    }
    return {
      status: 200,
      data: userById,
    };
  } catch (error) {
    return {
      status: 500,
      data: {
        message: "User Find By Id Error",
      },
    };
  }
};

const findByEmail = async (email) => {
  try {
    const userByEmail = await db.Users.findOne({ where: { email } });
    if (!userByEmail) {
      return {
        status: 404,
        data: {
          message: "User Email not found or does not exist",
        },
      };
    }
    return {
      status: 200,
      data: userByEmail,
    };
  } catch (error) {
    return {
      status: 500,
      data: {
        message: "User Find By Email Error",
      },
    };
  }
};

const insert = async (user) => {
  const { email, password } = user;
  try {
    const userExists = await db.Users.findOne({ where: { email } });
    if (userExists) {
      return {
        status: 400,
        data: {
          message: "User already exists",
        },
      };
    }
    const newUser = await db.Users.create({ email, password });
    if (!newUser) {
      return {
        status: 400,
        data: {
          message: "User not created",
        },
      };
    }
    const token = auth.tokenGenerator(email);
    return {
      status: 201,
      data: {
        token,
      },
    };
  } catch (error) {
    return {
      status: 500,
      data: {
        message: "User Insert Error",
      },
    };
  }
};

const update = async (id, user) => {
  const { email, password } = user;
  try {
    const userToUpdate = await db.Users.findByPk(id);
    if (!userToUpdate) {
      return {
        status: 404,
        data: {
          message: "User not found",
        },
      };
    }
    await userToUpdate.update({ email, password });
    return {
      status: 200,
      data: {
        message: "User updated",
      },
    };
  } catch (error) {
    return {
      status: 500,
      data: {
        message: "User Update Error",
      },
    };
  }
};

module.exports = {
  findAll,
  findById,
  findByEmail,
  insert,
  update,
};
