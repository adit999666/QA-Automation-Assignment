/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
}

module.exports = (on, config) => {
  /** the rest of your plugins... **/
  require('cypress-log-to-output').install(on)
  const options = { recordLogs: true };
  require('cypress-log-to-output').install(on, filterCallback, options)
  // or, if there is already a before:browser:launch handler, use .browserLaunchHandler inside of it
  // @see https://github.com/flotwig/cypress-log-to-output/issues/5
}

const { isFileExist } = require('cy-verify-downloads');
module.exports = (on, config) => {
  on('task', { isFileExist })
}
  
const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  on('task', { isFileExist })
  on("task", {
    parseXlsx({ filePath }) {
      return new Promise((resolve, reject) => {
        try {
          const jsonData = xlsx.parse(fs.readFileSync(filePath));
          resolve(jsonData);
        } catch (e) {
          reject(e);
        }
      });
    }
  });
};

const readXlxs = require('./read-xlsx')
module.exports = (on, config) => {
  on('task', { isFileExist })
  on('task', {
     'readXlsx': readXlxs.read
  }) 
}

