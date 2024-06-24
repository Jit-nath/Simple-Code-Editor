const { app, BrowserWindow } = require('electron');
function NewWindow() {
    const window = new BrowserWindow({
        minHeight: 600,
        minWidth: 900,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: 'rgb(31, 31, 31)',
            symbolColor: '#fff',
            height: 30
        },
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        },

    });
    window.loadFile('index.html');
}

app.whenReady().then(NewWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        NewWindow();
    }
});
