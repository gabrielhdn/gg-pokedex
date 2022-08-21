export default function capitalize(word: string) {
  const capitalized = word.split('')
    .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter));
  return capitalized.join('');
}
