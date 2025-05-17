const { contextBridge, ipcRenderer } = require('electron')

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
  saveData: (data) => ipcRenderer.send('save-data', data),
  onSaveResult: (callback) => ipcRenderer.on('save-result', (_, result) => callback(result))
})