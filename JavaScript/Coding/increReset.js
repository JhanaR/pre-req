function createCounter(start) {
  let count = start;
  const original = start;

  return {
    increment: function() {
      count++;
       console.log('increment',count);
      return count;
    },
    reset: function() {
      count = original;
      console.log('original',count);
      return count;
    }
  };
}
 const output = createCounter(6);
 output.increment();
 output.reset();