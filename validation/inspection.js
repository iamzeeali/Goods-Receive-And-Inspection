const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateReceiveInput(data) {
  let errors = {};

  data.invoicenumber = !isEmpty(data.invoicenumber) ? data.invoicenumber : "";
  data.trucknumber = !isEmpty(data.trucknumber) ? data.trucknumber : "";
  data.cartonnumber = !isEmpty(data.cartonnumber) ? data.cartonnumber : "";
  data.cartonuom = !isEmpty(data.cartonuom) ? data.cartonuom : "";
  data.cartonlength = !isEmpty(data.cartonlength) ? data.cartonlength : "";
  data.cartonwidth = !isEmpty(data.cartonwidth) ? data.cartonwidth : "";
  data.cartonheight = !isEmpty(data.cartonheight) ? data.cartonheight : "";

  if (Validator.isEmpty(data.invoicenumber)) {
    errors.invoicenumber = "Invoice number is required";
  }

  if (Validator.isEmpty(data.trucknumber)) {
    errors.trucknumber = "Truck number is required";
  }

  if (Validator.isEmpty(data.cartonnumber)) {
    errors.cartonnumber = "Carton number is required";
  }

  if (Validator.isEmpty(data.cartonuom)) {
    errors.cartonuom = "Carton UOM is required";
  }

  if (Validator.isEmpty(data.cartonlength)) {
    errors.cartonlength = "Carton length is required";
  }
  if (Validator.isEmpty(data.cartonwidth)) {
    errors.cartonwidth = "Carton width is required";
  }

  if (Validator.isEmpty(data.cartonheight)) {
    errors.cartonheight = "Carton height is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
