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

  trycatch: async function <T, U>(
    tryBlock: () => Promise<T>,
    catchBlock: (error: Error) => Promise<U>
  ): Promise<T | U> {
    try {
      return await tryBlock();
    } catch (error) {
      return await catchBlock(error);
    }
  },
};
