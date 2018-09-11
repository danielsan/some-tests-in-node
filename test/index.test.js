
const { expect } = require('chai');
const sinon = require('sinon');
const cleanrequire = require('@everymundo/cleanrequire');

describe('index.js', () => {
  let box;
  beforeEach(() => { box = sinon.createSandbox(); });
  afterEach(() => { box.restore(); });

  describe('#getCorrectIpAddress', () => {
    context('When the FORCE_LOCAL_IP env var exists', () => {
      const ip = require('ip');
      const lib = require('../say-dariel-is-my-compadre');
      // const lib = require('../');
      const myIp = 'ip.address()' + Math.random();

      beforeEach(() => {
        box.stub(ip, 'address').callsFake(() => myIp);
        box.stub(lib, 'sayDarielIsMyCompadre');
        // box.stub(process.env, 'FORCE_LOCAL_IP').value('true');
        // process.env.FORCE_LOCAL_IP = 'true';
      });

      it('should return the the REAL ip address', () => {
        const { getCorrectIpAddress } = cleanrequire('../index.js');

        const myPresetIpAddress = '0.0.0.0';
        const expected = ip.address();

        const result = getCorrectIpAddress(myPresetIpAddress);

        expect(result).to.equal(expected);
      });

      it('should call the address method of the ip package', () => {
        const { getCorrectIpAddress } = cleanrequire('../index.js');

        const myPresetIpAddress = '0.0.0.0';

        getCorrectIpAddress(myPresetIpAddress);

        expect(ip.address).to.have.property('calledOnce', true);
      });

      it('should call the address the function sayDarielIsMyCompadre', () => {
        const { getCorrectIpAddress } = cleanrequire('../index.js');

        const myPresetIpAddress = '0.0.0.0';

        getCorrectIpAddress(myPresetIpAddress);

        expect(lib.sayDarielIsMyCompadre).to.have.property('calledOnce', true);
      });
    });

    context('When FORCE_LOCAL_IP env var does NOT exists', () => {
      let previousValue;
      beforeEach(() => {
        box.stub(process.env, 'FORCE_LOCAL_IP').value('');
      });

      it('should return the same value passed as argument', () => {
        const { getCorrectIpAddress } = cleanrequire('../index.js');

        const myPresetIpAddress = '0.0.0.0';

        const result = getCorrectIpAddress(myPresetIpAddress);

        expect(result).to.equal(myPresetIpAddress);
      });
    });
  });
});