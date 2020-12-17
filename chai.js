(function (global, module) {
  const tryRequireChai = () => {
    try {
      return require('chai').expect;
    } catch (_) {
      return undefined;
    }
  };

  const chaiExpect = chai ? chai.expect : tryRequireChai();

  module.exports.chaiExpect = chaiExpect;
})(this, typeof module !== 'undefined' ? module : { exports: {} });
