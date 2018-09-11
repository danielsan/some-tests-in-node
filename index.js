
const getCorrectIpAddress = privateIp => (process.env.FORCE_LOCAL_IP ? require('ip').address() : privateIp);

// const ip = require('ip');

// function getCorrectIpAddress(privateIp) {
//   if (process.env.FORCE_LOCAL_IP) {
//     return ip.address();
//   } else {
//     return privateIp;
//   }
// }

// const getCorrectIpAddress = (someIp, x) => {
//   console.log(typeof process.env.FORCE_LOCAL_IP, x);
//   return process.env.FORCE_LOCAL_IP ? null : someIp;
// }

module.exports = { getCorrectIpAddress };
