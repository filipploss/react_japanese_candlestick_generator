export default function generator() {
  let quantity = 100;
  let minimum = 1;
  let maximum = 1000;
  let gaps = "no";
  let candles = [];
  for (let i = 0; i < quantity; i++) {
    let candleOpen;
    if ((gaps === "no" || gaps === "n") && i > 0) {
      candleOpen = parseFloat(String(candles[i - 1][4]));
    } else {
      candleOpen = parseFloat(
        Math.random() * (maximum - minimum + 1) + minimum
      );
    }
    let candleClose = parseFloat(
      Math.random() * (maximum - minimum + 1) + minimum
    );
    let candleMinShadowMaximum;
    let candleMinShadowMinimum = parseFloat(minimum);
    let candleMaxShadowMaximum = parseFloat(maximum);
    let candleMaxShadowMinimum;

    if (candleOpen < candleClose) {
      candleMinShadowMaximum = candleOpen;
      candleMaxShadowMinimum = candleClose;
    } else {
      candleMinShadowMaximum = candleClose;
      candleMaxShadowMinimum = candleOpen;
    }

    let candleMinShadow =
      Math.random() * (candleMinShadowMaximum - candleMinShadowMinimum) +
      candleMinShadowMinimum;
    let candleMaxShadow =
      Math.random() * (candleMaxShadowMaximum - candleMaxShadowMinimum) +
      candleMaxShadowMinimum;

    candles.push([
      i,
      Number(candleOpen.toFixed(2)),
      Number(candleMaxShadow.toFixed(2)),
      Number(candleMinShadow.toFixed(2)),
      Number(candleClose.toFixed(2))
    ]);
  }
  return candles;
}
generator();
