import { Position } from './types';
import { ParseError } from './base';

export class NotAllowImportError extends ParseError {
  ////////////////////////////////////////////////
  //  Constructor
  ////////////////////////////////////////////////

  constructor(script: string, position: Position) {
    super(script, position, `Import is not allowed.`);

    Object.setPrototypeOf(this, NotAllowImportError.prototype);
  }
}
