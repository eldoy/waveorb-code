# Waveorb Code

Non-essential but useful functions for [Waveorb.](https://waveorb.com)

### Usage

#### Frontend

Copy the `dist/code.js` file to the `app/assets/js/` folder in you application.

Add it to `app/config/assets.yml` for using it with the bundler:

```yml
js:
  # ...
  - code.js
```

#### Backend

Install:
```
npm i waveorb-code
```

Usage:
```js
const { sleep } = require('waveorb-code')
```

To install functions globally server side, use the `init` hook:

```js
const code = require('waveorb-code')
global.sleep = code.sleep
```

See the source code for documentation.

### License

ISC Licensed. Enjoy!
