const tryRequireChai = () => {
  try {
    return require('chai').expect;
  } catch (_) {
    return undefined;
  }
};

export const chaiExpect = chai ? chai.expect : tryRequireChai();
