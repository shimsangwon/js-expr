import { describe, expect, test } from 'vitest';
import * as E from 'fp-ts/Either';

import { safeParse } from './parse';
import { NotAllowImportError, NotAllowNewTargetError } from './error';

describe('JS 식 파싱 테스트', () => {
  test('import 는 허용 X', () => {
    const result = safeParse(`import { a } from 'something'`);
    expect(E.isLeft(result)).equal(true);
    if (E.isLeft(result)) {
      expect(result.left).to.instanceof(NotAllowImportError);
      if (result.left instanceof NotAllowImportError) {
        expect(result.left.position.line).to.equal(1);
        expect(result.left.position.column).to.equal(0);
        expect(result.left.position.index).to.equal(0);
      }
    }
  });

  test('new.target 은 허용하지 않습니다.', () => {
    const result = safeParse(`
    new.target;`);

    expect(E.isLeft(result)).equal(true);
    if (E.isLeft(result)) {
      expect(result.left).to.instanceof(NotAllowNewTargetError);
      if (result.left instanceof NotAllowNewTargetError) {
        expect(result.left.position.line).to.equal(2);
        expect(result.left.position.column).to.equal(4);
        expect(result.left.position.index).to.equal(5);
      }
    }
  });
});
