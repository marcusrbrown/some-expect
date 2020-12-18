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

export const jestExpect = expect || tryRequireExpect();

export default jestExpect || notInstalled;
