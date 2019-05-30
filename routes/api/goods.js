const express = require("express");
const router = express.Router();
const passport = require("passport");
//Load Input Validation
const validateReceiveInput = require("../../validation/receive");
const validateInspectionInput = require("../../validation/inspection");

const Good = require("../../models/Good");

// @route   POST api/goods/
// @desc    Receive goods
// @access  Private
router.post(
  "/receive",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateReceiveInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    Good.findOne({ user: req.user.id }).then(receive => {
      const newRcv = new Good({
        invoicenumber: req.body.invoicenumber,
        trucknumber: req.body.trucknumber,
        cartonnumber: req.body.cartonnumber,
        cartonuom: req.body.cartonuom,
        cartonlength: req.body.cartonlength,
        cartonwidth: req.body.cartonwidth,
        cartonheight: req.body.cartonheight
      });

      newRcv.save().then(receive => res.json(receive));
    });
  }
);

// @route   POST api/inspection
// @desc    inspect goods
// @access  Private
router.post(
  "/inspection",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateInspectionInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    Good.findOne({ user: req.user.id }).then(inspection => {
      const newIns = new Good({
        invoicenumber: req.body.invoicenumber,
        trucknumber: req.body.trucknumber,
        cartonnumber: req.body.cartonnumber,
        cartonuom: req.body.cartonuom,
        cartonlength: req.body.cartonlength,
        cartonwidth: req.body.cartonwidth,
        cartonheight: req.body.cartonheight,
        cartonopenstatus: req.body.cartonopenstatus,
        cartondamagestatus: req.body.cartondamagestatus,
        cartoncontentqty: req.body.cartonqty
      });

      newIns.save().then(inspection => res.json(inspection));
    });
  }
);

module.exports = router;
