const tryRequireChai = (): Chai.ExpectStatic | undefined => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
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
