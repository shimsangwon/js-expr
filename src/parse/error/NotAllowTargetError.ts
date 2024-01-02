import { Position } from './types';
import { ParseError } from './base';

export class NotAllowNewTargetError extends ParseError {
  ////////////////////////////////////////////////
  //  Constructor
  ////////////////////////////////////////////////

  constructor(script: string, position: Position) {
    super(script, position, `new.target is not allowed.`);

    Object.setPrototypeOf(this, NotAllowNewTargetError.prototype);
  }
}
