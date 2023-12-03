type Case<R> = [boolean, () => R];

export const block = {
  if: function <R>(cases: Case<R>[], elseBlock: () => R): R {
    for (const [condition, resultBlock] of cases) {
      if (condition) {
        return resultBlock();
      }
    }
    return elseBlock();
  },
};
