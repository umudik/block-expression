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

async function testTryCatch() {
  {
    let errorCaught = false;
    await block.trycatch(
      async () => {
        throw new Error("test error");
      },
      async (error) => {
        errorCaught = true;
      }
    );
    if (!errorCaught) throw new Error("Expected to catch an error, but didn't");
  }

  {
    let normalExecution = false;
    const x = await block.trycatch(
      async () => {
        normalExecution = true;
        return "test";
      },
      async (error) => {
        return error;
      }
    );
    if (!normalExecution && x !== "test")
      throw new Error("Expected normal execution, but got an error");
  }
}

testTryCatch();

console.log("tests are done.");
