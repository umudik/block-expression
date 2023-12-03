# block-expression

The "block-expression" library provides a Rust-like if block structure for managing conditional logic in a simple and readable way. It is designed for use in JavaScript and TypeScript projects.

## Installation

To include it in your project, use the following command:

```bash
npm install block-expression
```

## Usage

The block.if function takes a structure consisting of an array of conditions and result blocks. The conditions are evaluated sequentially, and the result block of the first satisfied condition is executed.

### Simple Example

```javascript
import { block } from "block-expression";

const x = 10;
const result = block.if(
  [
    [x > 15, () => "large"], // else-if
    [x > 5, () => "medium"], // else-if
    [x > 0, () => "small"], // else-if
  ],
  () => "zero" // else
);

console.log(result); // Outputs: "medium" as string
```

### Usage with Type Parameter

```typescript
import { block } from "block-expression";

const numberArray = [1, 234];
const result = block.if<boolean>( // It will be set automatically but you can still add it.
  [
    [Array.isArray(numberArray), () => true], // else-if
  ],
  () => false // else
);

console.log(result); // Outputs: "medium" as string
```
