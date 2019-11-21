(function() {
  class Background {
    constructor() {}

    fetchAsync = async url => {
      return new Promise(resolve => {
        fetch(url)
          .then(response => {
            response.text();
          })
          .then(text => resolve(text));
      });
    };
  }

  window.bg = new Background();
})();
