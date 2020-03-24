// const prompt = require("prompt");
import React from "react";

export default function generator() {
  let quantity = 100;
  let minimum = 1;
  let maximum = 999;
  let gaps = "no";
  let candles = [];
  for (let i = 0; i < quantity; i++) {
    let candleOpen;
    if ((gaps === "no" || gaps === "n") && i > 0) {
      candleOpen = parseFloat(String(candles[i - 1][1]));
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
    let type;

    if (candleOpen < candleClose) {
      candleMinShadowMaximum = candleOpen;
      candleMaxShadowMinimum = candleClose;
      type = "bull";
    } else {
      candleMinShadowMaximum = candleClose;
      candleMaxShadowMinimum = candleOpen;
      type = "bear";
    }

    let candleMinShadow =
      Math.random() * (candleMinShadowMaximum - candleMinShadowMinimum) +
      candleMinShadowMinimum;
    let candleMaxShadow =
      Math.random() * (candleMaxShadowMaximum - candleMaxShadowMinimum) +
      candleMaxShadowMinimum;

    candles.push([
      candleOpen.toFixed(3),
      candleClose.toFixed(3),
      candleMinShadow.toFixed(3),
      candleMaxShadow.toFixed(3),
      type
    ]);
    console.log(candles)
  }
  return (candles.map(item => 
    <div>{item}</div>
  ))
}
generator();
