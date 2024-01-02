import { codeFrameColumns } from '@babel/code-frame';

import { Position } from './types';

export abstract class ParseError extends Error {
  ////////////////////////////////////////////////
  //  Constructor
  ////////////////////////////////////////////////

  protected constructor(
    public readonly script: string,
    public readonly position: Position,
    message: string,
  ) {
    super(message);

    Object.assign(this, ParseError.prototype);
  }

  ////////////////////////////////////////////////
  //  Abstract Method
  ////////////////////////////////////////////////

  public pretty() {
    return codeFrameColumns(this.script, { start: this.position });
  }
}
