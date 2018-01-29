const CONFIG = {
  baseURI: '/flood',
  dbCleanInterval: 1000 * 60 * 60,
  dbPath: '/flood',
  floodServerPort: 3000,
  maxHistoryStates: 30,
  pollInterval: 1000 * 5,
  secret: process.env.FLOOD_SECRET || 'flood',
  scgi: {
    host: process.env.RTORRENT_HOST || 'localhost',
    port: process.env.RTORRENT_PORT || 5000,
    socket: false,
  },
  ssl: false,
};

module.exports = CONFIG;
