export class UnHandledError extends Error {
  ////////////////////////////////////////////////
  //  Constructor
  ////////////////////////////////////////////////

  constructor() {
    super('UnHandled Error');

    Object.assign(this, UnHandledError.prototype);
  }
}
