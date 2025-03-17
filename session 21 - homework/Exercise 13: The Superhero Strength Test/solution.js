const heroStrength = 95;
let strengthCategory = "";
const villainStrength = 90;
const strengthDiff = Math.abs(heroStrength - villainStrength);

if (strengthDiff > 10) {
  if (villainStrength > heroStrength) {
    console.log(
      "Malakor's power is overwhelming! Valiant is soundly defeated!"
    );
  } else {
    console.log("Valiant triumphs decisively! Malakor is utterly outmatched!");
  }
} else if (strengthDiff <= 10 && strengthDiff > 0) {
  if (villainStrength > heroStrength) {
    console.log(
      "Valiant barely edges out! A close call victory against Malakor!"
    );
  } else {
    console.log("Valiant triumphs decisively! Malakor is utterly outmatched!");
  }
} else {
  console.log(
    "It's a strength stalemate! Neither Valiant nor Malakor can overpower the other."
  );
}
