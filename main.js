const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
    const Window = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: 'hidden',
        titleBarOverlay:
        {
            color: 'rgb(17,17,17)',
            symbolColor: '#fff',
            height: 33
        },
        webPreferences:
        {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    Window.loadFile('index.html');

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
