const { app, BrowserWindow } = require("electron");

const serve = require("electron-serve");
const loadURL = serve({ directory: "./out" });

app.whenReady().then(createWindow);

async function createWindow() {
  const win = new BrowserWindow({
    width: 890,
    height: 680,
  });
  await loadURL(win);
  await win.loadURL("app://-");
}
