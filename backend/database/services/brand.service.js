const db = require("../models/index");

const findAll = async () => {
  try {
    const brands = await db.Brand.findAll();
    return {
      status: 200,
      data: brands,
    };
  } catch (error) {
    return {
      status: 500,
      data: { message: "Brand Find All Error" },
    };
  }
};

const insert = async (brand) => {
  try {
    const newBrand = await db.Brand.create(brand);
    return {
      status: 201,
      data: newBrand,
    };
  } catch (error) {
    return {
      status: 500,
      data: { message: "Brand Insert Error" },
    };
  }
};

const update = async (id, newData) => {
  const { name } = newData;

  try {
    if (!name) {
      return {
        status: 400,
        data: { message: "Brand name not found" },
      };
    }

    const newBrand = await db.Brand.update(
      { name },
      {
        where: {
          id,
        },
      }
    );

    return {
      status: 201,
      data: newBrand,
    };
  } catch (error) {
    return {
      status: 500,
      data: { message: "Brand Update Error" },
    };
  }
};

const exclude = async (id) => {
  try {
    const brand = await db.Brand.findByPk(id);

    if (!brand) {
      return {
        status: 404,
        data: { message: "Brand not found" },
      };
    }

    await db.Brand.destroy({
      where: {
        id,
      },
    });

    return {
      status: 200,
      data: { message: "Brand deleted" },
    };
  } catch (error) {
    return {
      status: 500,
      data: { message: "Brand exclusion error" },
    };
  }
};

module.exports = {
  findAll,
  insert,
  update,
  exclude,
};
