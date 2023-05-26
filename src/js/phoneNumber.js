export default function phoneNumber(number) {
  return `${number.replace(/(?<!\+)8/, '+7').replace(/[\s-()]/g, '')}`;
}
