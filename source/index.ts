/** The faces owofy will randomly insert at exclamation marks. */
export const faces: string[] = [
  '(*^ω^)',
  '(◕‿◕✿)',
  '(◕ᴥ◕)',
  'ʕ•ᴥ•ʔ',
  'ʕ￫ᴥ￩ʔ',
  '(*^.^*)',
  'owo',
  '(｡♥‿♥｡)',
  'uwu',
  '(*￣з￣)',
  '>w<',
  '^w^',
  '(つ✧ω✧)つ',
  '(/ =ω=)/',
];

/** Owofy some text! */
export default function owofy(input: string): string {
  return input
    .replace(/[lr]/g, 'w')
    .replace(/[LR]/g, 'W')
    .replace(/n([aeiou])/g, 'ny$1')
    .replace(/N([aeiou])/g, 'Ny$1')
    .replace(/N([AEIOU])/g, 'Ny$1')
    .replace(/ove/g, 'uv')
    .replace(/!+/g, `! ${faces[Math.floor(Math.random() * faces.length)]}`);
}
