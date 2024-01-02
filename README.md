# 아웃코드 앱

## 프로젝트 설정
`(옵션) 터미널 실행시 .nvmrc 자동 실행 방법`
```shell
# .bashrc 또는 .zshrc
if [-f .nvmrc]; then
  nvm use
fi
```

`yarn berry 설정`
> yarn berry 4.0.0 이상은 node v18 이상만 지원하기 떄문에 .nmvrc 를 이용해서 v20.10.0(LTS) 로 설정
```shell
# 최신 버전의 yarn berry 사용하도록 설정
yarn set version berry
```

`.cache 폴더 설정`  
yarn4 부터 .yarnrc.yml 또는 yarn 설정에 정의하지 않으면 cache 폴더가 yarn 이 설치되어 있는 폴더 밑에 설치됩니다. 따라서 아래와 같이 .yarnrc.yml 파일을 설정합니다.
```text
nodeLinker: pnp

// 프로젝트 디렉토리 밑에 있는 yarn 폴더에 설치
cacheFolder: ./.yarn/cache

compressionLevel: mixed
// 글로벌캐시 끄기
enableGlobalCache: false

yarnPath: .yarn/releases/yarn-4.0.2.cjs
```

`(옵션) Webstorm 을 사용할 시`
```text
1. 환경설정 다이얼로그 열기( Command + ',' )
2. 언어 및 프레임워크 설정 > Node.js 탭으로 이동
3. 패키지관리자를 프로젝트 yarn 으로 설정
4. Node.js 에 대한 코딩 지원 체크
```

`prettier 설정`
> ~~현재(2023.11.09) 기준으로 prettier 3 버전으로는 정상동작을 하지 않습니다. 따라서 2 버전 중에 최신으로 받아야 합니다.~~  
> @trivago/prettier-plugin-sort-imports 가 prettier 3 에서 정상적으로 동작하지 않아서 이를 eslint/import-order 로 대체합니다.# js-expr
