const { app, BrowserWindow } = require('electron');
function NewWindow() {
    const window = new BrowserWindow({
        height: 600,
        width: 900
    });
    window.maximize();
    window.loadFile('index.html');
}

app.whenReady().then(NewWindow);

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Recreate a window in the app when the dock icon is clicked and there are no other windows open (macOS).
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        NewWindow();
    }
});
