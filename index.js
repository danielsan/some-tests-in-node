
// const getCorrectIpAddress = privateIp => (process.env.FORCE_LOCAL_IP ? require('ip').address() : privateIp);

const ip = require('ip');

const { sayDarielIsMyCompadre } = require('./say-dariel-is-my-compadre');
// const sayDarielIsMyCompadre = () => {
//   process.stdout.write('Dariel is my Compadre!!!\n')
// };

function getCorrectIpAddress(privateIp) {
  sayDarielIsMyCompadre();
  const { FORCE_LOCAL_IP } = process.env;
  // console.log({ FORCE_LOCAL_IP })
  if (process.env.FORCE_LOCAL_IP) {
    return ip.address();
    // return '10.0.1.216';
  } else {
    return privateIp;
  }
}

// const getCorrectIpAddress = (someIp, x) => {
//   console.log(typeof process.env.FORCE_LOCAL_IP, x);
//   return process.env.FORCE_LOCAL_IP ? null : someIp;
// }

module.exports = { getCorrectIpAddress, sayDarielIsMyCompadre };
