import { safeParse } from './parse';

const script = `
  sdlfkjls()
`;

function main() {
  const result = safeParse(script);
  console.log(result);
}

main();
