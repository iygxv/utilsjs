/**
 * pLimit 函数是一个可定制的任务执行器，允许我们控制并发数，延迟执行和异步调用，并且利用了 Promise 的特性，使得它的执行过程更加可控和可靠
 * @param {number} concurrency 并发数量
 * @returns generator 执行器，可以使用 then 调用
 */
const pLimit = (concurrency) => {
  const queue = []; //任务队列
  let activeCount = 0; 

  const next = () => {
    activeCount--;
    if (queue.length > 0) {
      queue.shift()(); //如果队列存在元素则移除 第一位的元素 并将返回的元素的 函数执行
    }
  };

  //异步函数
  const run = async (fn, resolve, args) => {
    activeCount++; //增加activeCount
    
    const result = (async () => fn(...args))();
    resolve(result);
    try {
      await result;
    } catch {}

    next();
  };

  const enqueue = (fn, resolve, args) => {
    // bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 
    // 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
    queue.push(run.bind(undefined, fn, resolve, args));

    (async () => {
      // 包装在异步函数 下面的代码 会在主线程执行完后 微任务中去处理
      // 这里的代码不会被立即执行
      // 下面的代码会在下一个微任务中执行  主要是为了保证 activeCount 的更新
      // 因为activeCount 的增加 是在 run这个异步函数中
      await Promise.resolve();
      if (activeCount < concurrency && queue.length > 0) {
        queue.shift()();
      }
    })();
  };

  const generator = (fn, ...args) =>
    new Promise((resolve) => {
      enqueue(fn, resolve, args);
    });
  return generator;
}

export default pLimit;
