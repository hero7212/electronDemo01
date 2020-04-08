var electron = require('electron')

var app = electron.app
var BrowserWindow = electron.BrowserWindow  //窗口

var mainWindow = null   // 声明要打开主窗口

app.allowRendererProcessReuse = true

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            enableRemoteModule: true
        }
    })
    mainWindow.loadFile('index.html')
    mainWindow.on('closed', ()=>{
        mainWidow = null
    })
})