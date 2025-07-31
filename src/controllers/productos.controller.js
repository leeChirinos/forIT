
const fetch = require("node-fetch");
const { title } = require("process");
const querystring = require("querystring");

const index = (req, res) => {
  const query = querystring.stringify(req.query);

  fetch("https://fakestoreapi.com/products?" + query)
    .then((res) => res.json())
    .then((productos) => res.render("productos", { productos }));
};

const show = (req, res) => {
  fetch("https://fakestoreapi.com/products/" + req.params.id)
    .then((res) => res.json())
    .then((producto) => res.json(producto));
};

exports.listar = (req, res) => {
  res.render('productos', { productos });
};
module.exports = {
  index,
  show,
};