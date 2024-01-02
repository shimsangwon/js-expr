import { NotAllowNewTargetError } from './NotAllowTargetError';
import { UnHandledError } from './UnHandledError';
import { NotAllowImportError } from './NotAllowImportError';

export * from './NotAllowImportError';
export * from './NotAllowTargetError';

export const handleBabelError = (script: string, e: any) => {
  if (e.code === 'BABEL_PARSER_SYNTAX_ERROR') {
    switch (e.reasonCode) {
      case 'UnexpectedNewTarget':
        return new NotAllowNewTargetError(script, e.loc);
      case 'UnsupportedImport':
        return new NotAllowImportError(script, e.loc);
    }
  }

  return new UnHandledError();
};
