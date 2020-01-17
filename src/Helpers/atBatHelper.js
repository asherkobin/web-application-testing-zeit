import React from "react";

export function onBall(atBatInfo) {
  if (atBatInfo.balls === 3) {
    return { balls: 0, strikes: 0 } // walk has occured
  }
  else {
    return { balls: atBatInfo.balls + 1, strikes: atBatInfo.strikes}
  }
}

export function onStrike(atBatInfo) {
  if (atBatInfo.strikes === 2) {
    return { balls: 0, strikes: 0 } // strike-out has occured
  }
  else {
    return { balls: atBatInfo.balls, strikes: atBatInfo.strikes + 1}
  }
}

export function onFoul(atBatInfo) {
  if (atBatInfo.strikes === 2) {
    return { balls: atBatInfo.balls, strikes: atBatInfo.strikes } // do nothing with 2 strikes
  }
  else {
    return { balls: atBatInfo.balls, strikes: atBatInfo.strikes + 1}
  }
}

export function onHit(atBatInfo) {
  return { balls: 0, strikes: 0 }
}