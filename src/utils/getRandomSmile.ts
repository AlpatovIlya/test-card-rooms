
const emoji: Array<string> = [
  '^ↀᴥↀ^',
  '(^･ｪ･^)',
  'ฅ(•ㅅ•❀)ฅ',
  '(＾• ω •＾)',
  '(=^‥^=)',
];

const getRandomSmile = (): string => {
  const rand = Math.floor(Math.random() * emoji.length);
  return emoji[rand];
};


export default getRandomSmile;
