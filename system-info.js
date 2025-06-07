const os = require('os');

console.log('System Information:');
console.log(`Hostname: ${os.hostname()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Total Memory: ${Math.round(os.totalmem() / 1024 / 1024)} MB`);
console.log(`Free Memory: ${Math.round(os.freemem() / 1024 / 1024)} MB`);


