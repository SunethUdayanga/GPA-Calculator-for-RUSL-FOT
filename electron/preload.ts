import { contextBridge, ipcRenderer } from 'electron'

// Safely expose ipcRenderer to the renderer process
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send: (channel: string, ...args: unknown[]) => {
      ipcRenderer.send(channel, ...args)
    },
    on: (channel: string, listener: (...args: unknown[]) => void) => {
      ipcRenderer.on(channel, (_, ...args) => listener(...args))
      return () => {
        ipcRenderer.removeListener(channel, listener)
      }
    },
    once: (channel: string, listener: (...args: unknown[]) => void) => {
      ipcRenderer.once(channel, (_, ...args) => listener(...args))
    },
    removeListener: (channel: string, listener: (...args: unknown[]) => void) => {
      ipcRenderer.removeListener(channel, listener)
    }
  }
})

console.log('Preload script executed successfully')
