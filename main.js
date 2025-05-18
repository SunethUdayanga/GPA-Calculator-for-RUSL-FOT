const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

// Keep a global reference to prevent garbage collection
let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    },
    // Add this line to hide the menu bar
    // autoHideMenuBar: true
  })

  // Or alternatively, you can completely remove the menu bar with this line:
  // mainWindow.setMenu(null)

  // Load the index.html file
  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'))

  // Open DevTools in development
  // mainWindow.webContents.openDevTools()
}

// Create window when Electron is ready
app.whenReady().then(() => {
  createWindow()

  // On macOS, recreate window when dock icon is clicked
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// Handle any IPC messages from renderer
ipcMain.on('save-data', (event, data) => {
  // Here you could implement saving to a file or database
  console.log('Data received for saving:', data)
  // For now, we'll just send back a success message
  event.reply('save-result', { success: true })
})