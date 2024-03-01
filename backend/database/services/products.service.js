const db = require("../models/index");

const findAll = async () => {
  try {
    const productsList = await db.CellPhone.findAll({
      include: [
        {
          model: db.Model,
          as: "model",
          attributes: ["name"],
        },
        {
          model: db.Brand,
          as: "brand",
          attributes: ["name"],
        },
      ],
      attributes: ["price", "color"],
    });

    const products = productsList.map((product) => ({
      name: `${product.brand.name} ${product.model.name}`,
      brand: product.brand.name,
      model: product.model.name,
      price: product.price,
      color: product.color,
    }));

    return {
      status: 200,
      data: products,
    };
  } catch (error) {
    return {
      status: 500,
      data: { message: "Products Find All Error" },
    };
  }
};

const findByBrand = async (brand) => {
  try {
    const formattedBrand =
      brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase();
    const productsList = await db.CellPhone.findAll({
      include: [
        {
          model: db.Model,
          as: "model",
          attributes: ["name"],
        },
        {
          model: db.Brand,
          as: "brand",
          attributes: ["name"],
          where: {
            name: formattedBrand,
          },
        },
      ],
      attributes: ["price", "color"],
    });

    if (productsList.length === 0) {
      return {
        status: 404,
        data: { message: "No products found" },
      };
    }

    const filteredByBrand = productsList.map((product) => ({
      name: `${product.brand.name} ${product.model.name}`,
      brand: product.brand.name,
      model: product.model.name,
      price: product.price,
      color: product.color,
    }));

    return {
      status: 200,
      data: filteredByBrand,
    };
  } catch (error) {
    return {
      status: 500,
      data: { message: "Products Find By Brand Error" },
    };
  }
};

const insert = async (product) => {
  const { brand_id, model_id, price, color } = product;

  try {
    const [brand, model] = await Promise.all([
      db.Brand.findByPk(brand_id),
      db.Model.findByPk(model_id),
    ]);

    if (!brand || !model) {
      return {
        status: 400,
        data: { message: "Brand or model not found" },
      };
    }

    const newProduct = await db.CellPhone.create({
      model_id: model.id,
      brand_id: brand.id,
      price,
      color,
    });

    return {
      status: 201,
      data: newProduct,
    };
  } catch (error) {
    return {
      status: 500,
      data: { message: "Internal Server Error" },
    };
  }
};

const update = async (id, newData) => {
  const { brand_id, model_id, price, color } = newData;

  try {
    const [brand, model] = await Promise.all([
      db.Brand.findByPk(brand_id),
      db.Model.findByPk(model_id),
    ]);

    if (!brand || !model) {
      return {
        status: 400,
        data: { message: "Brand or model not found" },
      };
    }

    const newProduct = await db.CellPhone.update(
      {
        model_id: model.id,
        brand_id: brand.id,
        price,
        color,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return {
      status: 201,
      data: newProduct,
    };
  } catch (error) {
    console.log("brand_id", brand_id);
    console.log("model_id", model_id);
    return {
      status: 500,
      data: { message: "Internal Server Error" },
    };
  }
};

const exclude = async (id) => {
  try {
    const product = await db.CellPhone.findByPk(id);

    if (!product) {
      return {
        status: 404,
        data: { message: "Product not found" },
      };
    }

    await db.CellPhone.destroy({
      where: {
        id,
      },
    });

    return {
      status: 200,
      data: { message: "Product deleted" },
    };
  } catch (error) {
    return {
      status: 500,
      data: { message: "Product exclusion error" },
    };
  }
};

module.exports = {
  findAll,
  findByBrand,
  insert,
  update,
  exclude,
};
