import { onBall, onStrike, onFoul, onHit } from "../Helpers/atBatHelper";

// TL QUESTION: why can we call test() without an import?

test("Initial Test", () => { 
  expect(false).toBe(false);
});

test("onBall resets after 4th ball", () => {
  expect(onBall({ balls: 3, strikes: 0})).toStrictEqual({ balls: 0, strikes: 0})
});

test("onBall inrements after 2nd ball", () => {
  expect(onBall({ balls: 2, strikes: 1})).toStrictEqual({ balls: 3, strikes: 1})
});

test("onStrike resets after 3rd strike", () => {
  expect(onStrike({ balls: 3, strikes: 2})).toStrictEqual({ balls: 0, strikes: 0})
});

test("onStrike increments after 1st strike", () => {
  expect(onStrike({ balls: 2, strikes: 1})).toStrictEqual({ balls: 2, strikes: 2})
});

test("onHit resets", () => {
  expect(onHit({ balls: 2, strikes: 2})).toStrictEqual({ balls: 0, strikes: 0})
});

test("onFoul increments strike after 1st foul", () => {
  expect(onFoul({ balls: 2, strikes: 0})).toStrictEqual({ balls: 2, strikes: 1})
});

test("onFoul does nothing whith 2 strikes", () => {
  expect(onFoul({ balls: 2, strikes: 2})).toStrictEqual({ balls: 2, strikes: 2})
});
