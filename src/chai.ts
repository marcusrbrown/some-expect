const tryRequireChai = (): Chai.ExpectStatic | undefined => {
  try {
    return require('chai').expect;
  } catch (_) {
    return undefined;
  }
};

export const chaiExpect = chai ? chai.expect : tryRequireChai();

export default chaiExpect ||
  function notInstalled() {
    throw new Error('Install chai');
  };
