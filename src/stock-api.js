import request from 'request-promise-native';

const API_KEY = 'P4FVS1NXV78E3QWS'; // hardcoded and stored API key is alright for this demonstration purpose. Key is not sensitive data in this instance. In a real production application, this would have to be encrypted and stored carefully.
const API_BASE = 'https://www.alphavantage.co/query';

// API modes
const INTRADAY = 'TIME_SERIES_INTRADAY';
const DAILY = 'TIME_SERIES_DAILY';
const DAILY_ADJUSTED = 'TIME_SERIES_DAILY_ADJUSTED';
const WEEKLY = 'TIME_SERIES_WEEKLY';
const MONTHLY = 'TIME_SERIES_MONTHLY';

var getTimeSeries = function (mode, symbol, interval = '1min', outputsize = 'full', datatype = 'json') {
  var json = (datatype === 'json' ? true : false);
  var requestOptions = {
    'uri': API_BASE,
    'json': json,
    'qs': {
      'function': mode,
      'symbol': symbol,
      'outputsize': outputsize,
      'datatype': datatype,
      'apikey': API_KEY
    }
  };

  if (mode === INTRADAY || mode === DAILY || mode === DAILY_ADJUSTED) {
    requestOptions.qs.outputsize = outputsize;
  }

  if (mode === INTRADAY) {
    requestOptions.qs.interval = interval;
  }

  return request(requestOptions);

};

exports.getIntraday = function (symbol, interval = '1min', outputsize = 'full', datatype = 'json') {
  return getTimeSeries(INTRADAY, symbol, interval, outputsize, datatype);
};

exports.getDaily = function (symbol, outputsize = 'full', datatype = 'json') {
  return getTimeSeries(DAILY, symbol, null, outputsize, datatype);
};

exports.getDailyAdjusted = function (symbol, outputsize = 'full', datatype = 'json') {
  return getTimeSeries(DAILY_ADJUSTED, symbol, null, outputsize, datatype);
};

exports.getWeekly = function (symbol, datatype = 'json') {
  return getTimeSeries(WEEKLY, symbol, null, null, datatype);
};

exports.getMonthly = function (symbol, datatype = 'json') {
  return getTimeSeries(MONTHLY, symbol, null, null, datatype);
};