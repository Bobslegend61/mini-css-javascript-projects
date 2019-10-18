(() => {
  if ('ondevicelight' in window) {
    window.addEventListener('devicelight', event => {
      console.log(event);
      let root = document.documentElement;
      if (event.value < 50) {
        root.style.setProperty('--backgound-color', '#1d1d1d');
        root.style.setProperty('--text-color', '#e9e9e9');
      } else {
        root.style.setProperty('--text-color', '#1d1d1d');
        root.style.setProperty('--backgound-color', '#e9e9e9');
      }
    });
  } else {
    console.log('Not supported');
  }
})();
