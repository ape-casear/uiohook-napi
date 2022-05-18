// const addon = require('./build/Release/uiohook_napi.node')

// addon.start(console.log)

//////////////////////////////

const addon = require('./src/index.js')

const key = addon.registerShortcut([33], function(event) {
    console.log('按下了33', event)
})
addon.start()