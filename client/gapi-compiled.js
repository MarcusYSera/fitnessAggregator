'use strict';
const jsdom = require('jsdom');

const dom = new jsdom.JSDOM(
  `<DOCTYPE html><html land='en'><head><body></body></head></html>`
);

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.gapi = void 0;

const accessScript = url => {
  return new Promise((res, rej) => {
    let script = dom.window.document.createElement('script');
    script.src = url;

    console.log(script);
    script.onreadstatechange = script.onload = () => {
      let interval = setInterval(() => {
        if (!script.readyState || /loaded|complete/.test(script.readyState)) {
          clearInterval(interval);
          console.log('gapi loaded');
          res();
        }
      }, 100);
    };

    script.onerror = (message, url, line, column, error) => {
      console.log('gapi did not load');
      rej({
        message,
        url,
        line,
        column,
        error,
      });
    };

    dom.window.document.getElementsByTagName('head')[0].appendChild(script);
  });
};

const gapi = accessScript('https://apis.google.com/js/api.js');
exports.gapi = gapi;
