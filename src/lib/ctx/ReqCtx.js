const uuidV1 = require('uuid/v1');
const defaultLogger = require('../logger/defaultLogger');
const moment = require('moment');


class ReqCtx {
  constructor(logger) {
    if (typeof logger === 'undefined' || typeof logger !== 'object') {
      this.logger = defaultLogger;
    } else {
      this.logger = logger;
    }

    this.logger = logger;
    this.id = uuidV1();
    this.timers = {};
    this.data = {};
    this.startTime = ReqCtx.now();
    this.endTime = -1;
    this.requestTime = -1;
  }

  static now() {
    return Date.now();
  }

  setData(key, value) {
    this.data[key] = value;
  }

  addData(key, value) {
    if (this.data.hasOwnProperty(key)) {
      const prevValue = this.data[key];
      const prependList = Array.isArray(prevValue) ? prevValue : [prevValue];

      this.data[key] = prependList.concat([value]);

      return this;
    }

    this.setData(key, value);

    return this;
  }

  startTimer(key) {
    const startTime = ReqCtx.now();

    return () => {
      this.timers[key] = ReqCtx.now() - startTime;
    };
  }

  withTimer(key, promise) {
    const stopTimer = this.startTimer(key);

    return promise.then(p => {
      stopTimer();

      return p;
    }).catch(e => {
      stopTimer();

      return Promise.reject(e);
    });
  }

  withTimerSync(key, cb) {
    const stopTimer = this.startTimer(key);

    cb();

    stopTimer();
  }

  finalizeRequest() {
    this.endTime = ReqCtx.now();
    this.requestTime = this.endTime - this.startTime;

    this.logger.info(JSON.stringify(this.toJSON()));
  }

  toJSON() {
    const format = 'YYYY-MM-DD, HH:mm:ss:SSS';

    return {
      id: this.id,
      timers: this.timers,
      data: this.data,
      startTime: moment(this.startTime).format(format),
      endTime: moment(this.endTime).format(format),
      requestTime: this.requestTime,
    };
  }
}

module.exports = ReqCtx;