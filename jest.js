(function (global, module) {
  const tryRequireExpect = () => {
    try {
      return require('expect');
    } catch (_) {
      return undefined;
    }
  };

  const notInstalled = () => {
    throw new Error('Install Jest or expect.');
  };

  const jestExpect = expect || tryRequireExpect();

  // eslint-disable-next-line no-multi-assign
  module.exports = jestExpect || notInstalled;
  module.exports.jestExpect = jestExpect;
})(this, typeof module !== 'undefined' ? module : { exports: {} });
