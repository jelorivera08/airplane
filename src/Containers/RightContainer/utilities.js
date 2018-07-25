export function converter(i, k) {
  let first = i + 1;
  let second;
  switch (k) {
    case 0:
      second = "A";
      break;
    case 1:
      second = "B";
      break;
    case 2:
      second = "C";
      break;
    case 3:
      second = "D";
      break;
    case 4:
      second = "E";
      break;
    case 5:
      second = "F";
      break;
    case 6:
      second = "G";
      break;
    case 7:
      second = "H";
      break;
    case 8:
      second = "I";
      break;
    case 9:
      second = "J";
      break;
    case 10:
      second = "K";
      break;
    case 11:
      second = "L";
      break;
    case 12:
      second = "M";
      break;
    case 13:
      second = "N";
      break;
    case 14:
      second = "O";
      break;
    case 15:
      second = "P";
      break;
    case 16:
      second = "Q";
      break;
    case 17:
      second = "R";
      break;
    case 18:
      second = "S";
      break;
    case 19:
      second = "T";
      break;
    case 20:
      second = "U";
      break;
    case 21:
      second = "V";
      break;
    case 22:
      second = "W";
      break;
    case 23:
      second = "X";
      break;
    case 24:
      second = "Y";
      break;
    case 25:
      second = "Z";
      break;
    default:
      second = "L";
      break;
  }
  return `${first}${second}`;
}