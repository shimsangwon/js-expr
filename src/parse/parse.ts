import * as babel from '@babel/parser';
import * as E from 'fp-ts/Either';
import { babelOptions } from './parseOptions';
import { handleBabelError } from './error';

export const safeParse = (likeScript: string) => {
  try {
    const result = babel.parseExpression(likeScript, babelOptions);
    return E.right(1);
  } catch (e) {
    return E.left(handleBabelError(likeScript, e));
  }
};
