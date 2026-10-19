const os = require("os");

console.log("Platform", os.platform());
console.log("Architecture", os.arch());
console.log("CPUs", os.cpus());
const totalGB = os.totalmem() / 1024 ** 3;
console.log("Total Memory", totalGB.toFixed(2));
console.log("Free Memory", os.freemem());
console.log("Hostname", os.hostname());
console.log("HomeDirectory", os.homedir());
console.log("Temp Directory", os.totalmem());

console.log(process.env);

