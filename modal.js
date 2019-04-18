const {
  BrowserWindow
} = require('electron')

let modalWindow

function createWindow(mainWindow) {
  modalWindow = new BrowserWindow({
    parent: mainWindow,
    modal: true,
    width: 200,
    height: 100,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  modalWindow.loadFile('index.html')

  modalWindow.on('closed', function () {
    modalWindow = null
  })
}

exports.createWindow = createWindow