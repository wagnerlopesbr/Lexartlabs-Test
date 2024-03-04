const db = require("../models/index");

const findAll = async () => {
  try {
    const models = await db.Model.findAll();
    return {
      status: 200,
      data: models,
    };
  } catch (error) {
    return {
      status: 500,
      data: { message: "Model Find All Error" },
    };
  }
};

const insert = async (model) => {
  try {
    const newModel = await db.Model.create(model);
    return {
      status: 201,
      data: newModel,
    };
  } catch (error) {
    return {
      status: 500,
      data: { message: "Model Insert Error" },
    };
  }
};

const update = async (id, newData) => {
  const { name } = newData;

  try {
    if (!name) {
      return {
        status: 400,
        data: { message: "Model name not found" },
      };
    }

    const newModel = await db.Model.update(
      { name },
      {
        where: {
          id,
        },
      }
    );

    return {
      status: 201,
      data: newModel,
    };
  } catch (error) {
    return {
      status: 500,
      data: { message: "Model Update Error" },
    };
  }
};

const exclude = async (id) => {
  try {
    const model = await db.Model.findByPk(id);

    if (!model) {
      return {
        status: 404,
        data: { message: "Model not found" },
      };
    }

    await db.Model.destroy({
      where: {
        id,
      },
    });

    return {
      status: 200,
      data: { message: "Model deleted" },
    };
  } catch (error) {
    return {
      status: 500,
      data: { message: "Model exclusion error" },
    };
  }
};

module.exports = {
  findAll,
  insert,
  update,
  exclude,
};
