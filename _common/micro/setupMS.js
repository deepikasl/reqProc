'use strict';
var self = setupMS;
module.exports = self;

global.util = require('util');
global._ = require('underscore');
global.async = require('async');

function setupMS(params) {
  global.msName = params.msName;
  process.title = params.msName;
  global.config = {};

  global.logger = require('../logging/logger.js')();
  require('../handleErrors/ActErr.js');

  /* Env Set */
  global.config.amqpExchange = 'shippableEx';
  global.config.apiUrl = process.env.SHIPPABLE_API_URL;
  global.config.inputQueue = process.env.LISTEN_QUEUE;
  global.config.amqpUrl = process.env.SHIPPABLE_AMQP_URL;
  global.config.nodeId = process.env.NODE_ID;
  global.config.nodeTypeCode = parseInt(process.env.NODE_TYPE_CODE) || 7001;
  global.config.subscriptionId = process.env.SUBSCRIPTION_ID;
  global.config.apiToken = process.env.SHIPPABLE_API_TOKEN;
  global.config.execImage = process.env.EXEC_IMAGE;
  /* Node Type Codes */
  global.nodeTypeCodes = {
    dynamic: 7000,
    custom: 7001,
    system: 7002,
    service: 7003
  };

  global.config.isSystemNode =
    config.nodeTypeCode === global.nodeTypeCodes.system;
  global.config.isServiceNode =
    config.nodeTypeCode === global.nodeTypeCodes.service;
}