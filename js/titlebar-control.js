const { ipcRenderer } = require('electron');

ipcRenderer.on('menu-click', (event, arg) => {
    document.querySelectorAll('.control').forEach(section => {
        section.classList.remove('control-active');
    });
    document.getElementById(arg).classList.add('control-active');
});