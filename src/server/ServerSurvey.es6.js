const fs = require('fs');

import ServerModule from './ServerModule.es6.js';

function padLeft(str, value, length) {
  str = str + '';
  while (str.length < length) { str = value + str; }
  return str;
}

export default class ServerSurvey extends ServerModule {
  constructor(options = {}) {
    super(options.name || 'survey');
    // prepare file name
    const now = new Date();
    const year = padLeft(now.getFullYear(), 0, 2);
    const month = padLeft(now.getMonth() + 1, 0, 2);
    const day = padLeft(now.getDate(), 0, 2);
    const hour = padLeft(now.getHours(), 0, 2);
    const minutes = padLeft(now.getMinutes(), 0, 2);
    const fileName = `survey-${year}-${month}-${day}_${hour}-${minutes}`;

    // @TODO allow to change folder name (aka `surveys`)
    this.filePath = `${process.cwd()}/surveys/${fileName}`;
    this._appendToFile = this._appendToFile.bind(this);
  }

  connect(client) {
    super.connect(client);

    client.receive(`${this.name}:answers`, this._appendToFile)
  }

  disconnect(client) {
    super.disconnect(client);
  }

  _appendToFile(json) {
    fs.appendFile(this.filePath, `${json}\n`, (err) => {
      if (err) { console.error(err.message); }
      console.log(json + ' appended to ' + this.filePath);
    });
  }
}

module.exports = ServerSurvey;
