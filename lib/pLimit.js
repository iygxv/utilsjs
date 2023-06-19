/**
 * pLimit 函数是一个可定制的任务执行器，允许我们控制并发数，延迟执行和异步调用，并且利用了 Promise 的特性，使得它的执行过程更加可控和可靠
 * @param {*} concurrency 并发数量
 * @returns 
 */
export function pLimit(concurrency) {
  if (!(Number.isInteger(concurrency) && concurrency > 0)) {
    throw new TypeError("Expected `concurrency` to be a positive integer");
  }

  const queue = [];
  let activeCount = 0;

  const addTask = (fn, resolve, args) => {
    queue.push({
      fn,
      resolve,
      args,
    });

    if (activeCount < concurrency) {
      executeNextTask();
    }
  };

  const executeNextTask = () => {
    if (queue.length === 0) {
      return;
    }
    const { fn, resolve, args } = queue.shift();
    activeCount++;

    const executeTask = async () => {
      try {
        const result = await fn.apply(null, args);
        resolve(result);
      } catch (err) {
        resolve(Promise.reject(err));
      } finally {
        activeCount--;
        executeNextTask();
      }
    };

    executeTask();
  };

  const generator = (fn, ...args) => new Promise((resolve, reject) => {
    addTask(fn, resolve, args);
  });

  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount,
    },
    pendingCount: {
      get: () => queue.length,
    },
    clearQueue: {
			value: () => {
				queue = []
			},
		},
  });

  return generator;
}