const models = require('../models');
const uuid = require('uuid/v1');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const moment = require('moment');

const user = {};

user.test = async (req, res) => {
  res.json({
    status: true,
    msg: 'Hello world',
  });
}

module.exports = user;
