const canvasAPI = require('node-canvas-api')

canvasAPI.getSelf()
  .then(self => console.log(self))
