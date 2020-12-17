import importedExpect = require('expect');

export declare const expect: typeof importedExpect;

declare namespace jest {
  export type Expect = typeof importedExpect;
}
