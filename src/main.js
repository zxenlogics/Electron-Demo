const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

var mainWindow

app.on('ready', _=> {

   mainWindow = new BrowserWindow({
        height: 400,
        width: 400
    })

    mainWindow.loadURL(`file://${__dirname}/countdown.html`)
    
    mainWindow.on('closed', _=> {
        console.log('Shutting down...')
        mainWindow = null
    })

})