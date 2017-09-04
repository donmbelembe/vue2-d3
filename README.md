# vue2-d3

A Vue.js plugin for [D3.js](https://github.com/d3/d3).

## Installation

npm:
``` bash
npm install --save vue2-d3
```

Vue:
```javascript
import Vue from 'vue'
import VueD3 from 'vue2-d3'
Vue.use(VueD3)
```

HTML (Browserify):
```html
<body>
  ...
  <!-- Bottom of body -->
  <script src="/path/to/vue.js"</script>
  <script src="/node_modules/vue2-d3/src/vue-d3.js'"></script>
</body>
```

## Usage
D3 is now available through ```this.$d3```

```javascript
this.$d3.selectAll('p').style('color', 'white');
```
