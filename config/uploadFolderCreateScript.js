const fs = require("fs");

const path = require('path');

const categoriesFolder = path.join(__dirname, '../public/uploads/categories');
const customizeFolder = path.join(__dirname, '../public/uploads/customize');
const productsFolder = path.join(__dirname, '../public/uploads/products');

const CreateAllFolder = () => {
  if (!fs.existsSync(categoriesFolder)) {
    fs.mkdirSync(categoriesFolder, {
      recursive: true,
    });
  }

  if (!fs.existsSync(customizeFolder)) {
    fs.mkdirSync(customizeFolder, {
      recursive: true,
    });
  }

  if (!fs.existsSync(productsFolder)) {
    fs.mkdirSync(productsFolder, {
      recursive: true,
    });
  }
};

module.exports = CreateAllFolder;
