const accessScript = url => {
  return new Promise((res, rej) => {
    let script = window.document.createElement('script');
    script.src = url;
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
      rej({ message, url, line, column, error });
    };
    window.document.getElementsByTagName('head')[0].appendChild(script);
  });
};

export const gapiPromise = accessScript('https://apis.google.com/js/api.js');
