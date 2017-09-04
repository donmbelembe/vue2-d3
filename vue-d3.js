(function  () {
    var VueD3 = {};
    var D3 = typeof require === 'function'
      ? require('d3')
      : window.D3;

      if (!D3) {
        throw new Error('[vue-d3] cannot locate d3');
      }

      console.log(D3)
})();