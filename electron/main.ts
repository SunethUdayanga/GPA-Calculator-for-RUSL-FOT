import { app, BrowserWindow, Menu } from 'electron'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// The built directory structure
process.env.APP_ROOT = path.join(__dirname, '..')

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST

let win: BrowserWindow | null
let splashScreen: BrowserWindow | null

function createSplashScreen() {
  splashScreen = new BrowserWindow({
    width: 500,
    height: 300,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    center: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false
    }
  })

  // Load the splash screen HTML
  splashScreen.loadFile(path.join(process.env.VITE_PUBLIC, 'splash.html'))
  
  // Don't show the splash screen in taskbar
  splashScreen.setSkipTaskbar(true)
}

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(process.env.VITE_PUBLIC, 'icons/icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Change from .mjs to .js
      nodeIntegration: false,
      contextIsolation: true, // Must be true for contextBridge
      sandbox: false
    },
    // Hide the default menu bar
    autoHideMenuBar: true,
    // Set background color to match your app's theme
    backgroundColor: '#f8fafc',
    // Add a custom title
    title: 'GPA Calculator',
    // Show window only when ready to avoid flickering
    show: false,
  })

  // Hide the menu bar completely
  Menu.setApplicationMenu(null)

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
    
    // Close splash screen and show main window after a short delay
    setTimeout(() => {
      if (splashScreen) {
        splashScreen.close()
        splashScreen = null
      }
      win?.show()
    }, 1000) // 1 second delay
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    win.loadFile(path.join(RENDERER_DIST, 'index.html'))
  }
}

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(() => {
  createSplashScreen()
  createWindow()
})
