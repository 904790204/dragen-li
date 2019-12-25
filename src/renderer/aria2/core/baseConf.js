import {remote} from 'electron'
import is from 'electron-is'
console.log(remote.app);

export let baseConf = {
  'all-proxy': '',
  'allow-overwrite': true,
  'auto-file-renaming': true,
  'continue': true,
  'dir': remote.app.getPath('downloads'),
  'max-concurrent-downloads': 5,
  'max-connection-per-server': is.macOS() ? 64 : 16,
  'max-download-limit': 0,
  'max-overall-download-limit': 0,
  'max-overall-upload-limit': '128K',
  'min-split-size': '1M',
  'pause': true,
  'rpc-listen-port': 16800,
  'rpc-secret': '',
  'seed-time': 60,
  'split': 16,
  'user-agent': 'Transmission/2.94'
}