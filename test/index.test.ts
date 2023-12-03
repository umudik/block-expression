import { block } from "../src";

{
  const x = 20;
  const result = block.if(
    [
      [x > 15, () => "large"],
      [x > 5, () => "medium"],
      [x > 0, () => "small"],
    ],
    () => "zero"
  );
  if (result !== "large") throw new Error(`Expected large, but got ${result}`);
}

{
  const x = 10;
  const result = block.if(
    [
      [x > 15, () => "large"],
      [x > 5, () => "medium"],
      [x > 0, () => "small"],
    ],
    () => "zero"
  );
  if (result !== "medium") throw new Error(`Expected small, but got ${result}`);
}

{
  const x = 1;
  const result = block.if(
    [
      [x > 15, () => "large"],
      [x > 5, () => "medium"],
      [x > 0, () => "small"],
    ],
    () => "zero"
  );
  if (result !== "small") throw new Error(`Expected small, but got ${result}`);
}

{
  const x = 0;
  const result = block.if(
    [
      [x > 15, () => "large"],
      [x > 5, () => "medium"],
      [x > 0, () => "small"],
    ],
    () => "zero"
  );
  if (result !== "zero") throw new Error(`Expected zero, but got ${result}`);
}

console.log("tests are done.");
