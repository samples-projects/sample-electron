const {
  app,
  Menu,
  BrowserWindow
} = require('electron')
const modalWindow = require('./modal')

function createMenu(mainWindow) {
  const template = [{
      label: 'Edit',
      submenu: [{
          role: 'undo'
        },
        {
          role: 'redo'
        },
        {
          type: 'separator'
        },
        {
          role: 'cut'
        },
        {
          role: 'copy'
        },
        {
          role: 'paste'
        },
        {
          role: 'pasteandmatchstyle'
        },
        {
          role: 'delete'
        },
        {
          role: 'selectall'
        }
      ]
    },
    {
      label: 'View',
      submenu: [{
          role: 'reload'
        },
        {
          role: 'forcereload'
        },
        {
          role: 'toggledevtools'
        },
        {
          type: 'separator'
        },
        {
          role: 'resetzoom'
        },
        {
          role: 'zoomin'
        },
        {
          role: 'zoomout'
        },
        {
          type: 'separator'
        },
        {
          role: 'togglefullscreen'
        }
      ]
    },
    {
      role: 'window',
      submenu: [{
          role: 'minimize'
        },
        {
          role: 'close'
        }
      ]
    },
    {
      role: 'help',
      submenu: [{
        label: 'Learn More',
        click() {
          require('electron').shell.openExternal('https://electronjs.org')
        }
      }]
    },
    {
      label: 'sample',
      submenu: [{
        label: 'popup',
        click() {
          modalWindow.createWindow(mainWindow)
        }
      }]
    }
  ]
  const menu = Menu.buildFromTemplate(template)

  return menu
}

exports.createMenu = createMenu