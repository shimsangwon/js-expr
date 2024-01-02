import { parse } from '@babel/parser';

export type BabelParserOptions = Exclude<
  Parameters<typeof parse>[1],
  undefined
>;

export const babelOptions: BabelParserOptions = {
  // Import/Export 는 언제나 맨위에 선언 되도록
  allowImportExportEverywhere: false,
  // Await 는 함수 바깥에서 사용하지 못하게 설정
  allowAwaitOutsideFunction: false,
  // 함수나 클래스 외부에서는 new.target 을 사용할 수 없도록
  allowNewTargetOutsideFunction: false,
  // 함수 바깥에서 return 문 사용하지 못하도록
  allowReturnOutsideFunction: false,
  // 함수 바깥에서 super 를 사용하지 못하도록
  allowSuperOutsideMethod: false,
  // 선언된지 않은 식별자를 export 못하도록
  allowUndeclaredExports: false,
  // 주석 제거
  attachComment: false,
  // true 로 설정하면 오류 발생
  annexB: false,
  // import 사용 불가
  createImportExpressions: false,
  // 뭐가다른지 모르겠음
  createParenthesizedExpressions: false,
  // 에러를 던지는게 아니라 반환하도록
  errorRecovery: false,
};
