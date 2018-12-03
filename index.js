const {app, BrowserWindow} = require('electron');
const express = require('./myapp.js');

app.on('ready', function() {
    mainWindow = new BrowserWindow({
      width: 1280,
      height: 720,
      // autoHideMenuBar: true,
      // useContentSize: true,
      // resizable: false,
    });
    mainWindow.loadURL('http://localhost:3000/');
    mainWindow.focus(); 
});