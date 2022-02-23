// Memoziation :   emoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache.



// A simple memoized function to Add Number
const memoizedAdd = () => {
    let cache = {};
    return (number) => {
      if (number in cache) {
        console.log('Fetching from cache: ');
        return cache[number];
      }
      else {
        console.log('Calculating result: ');
        let result = number + 10;
        cache[number] = result;
        return result;
      }
    }
  }
  // returned function from memoizedAdd
  const sum = memoizedAdd();
  console.log(sum(10)); // Calculating result: 20
  console.log(sum(10)); // Fetching from cache: 20