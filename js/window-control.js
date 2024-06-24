const { remote } = require('electron');

document.getElementById('minimize').addEventListener('click', () => {
    const window = remote.getCurrentWindow();
    window.minimize();
});

document.getElementById('window').addEventListener('click', () => {
    const window = remote.getCurrentWindow();
    if (window.isMaximized()) {
        window.unmaximize();
    } else {
        window.maximize();
    }
});

document.getElementById('close').addEventListener('click', () => {
    const window = remote.getCurrentWindow();
    window.close();
});

