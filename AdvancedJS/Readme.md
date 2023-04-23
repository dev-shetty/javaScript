## JavaScript

JavaScript is a synchronous, blocking and single-threaded language.

- **Synchronous** - code executes top-down with one line executing at any given time
- **Blocking** - The next process will wait till the current progress has finished
- **Single Threaded** - Thread is a process that a javascript program can use to run a task. Each thread can do only one task at a time. JS has only 1 thread called **Main Thread**.

So we are using Asynchronous javaScript so that the heavy task is waiting till its completed and we can continue with the next processes.

## Intervals

- Timers and intervals are **not part of javascript**. They are implemented by the **browser** and setTimeout and setInterval are basically the names given to that functionality in javascript.
- Duration parameter is the **minimum delay**, not guaranteed delay. If the time delay is 0ms, it won't run immediately, it means it is the minimum duration after which it will run.

- We can achieve setInterval with recursive setTimeout

```js
// Irrespective of how long the code takes to run the interval will remain the same.
setTimeout(function run() {
  console.log("Hello")
  setTimeout(run, 100)
}, 100)
```

## From here - Written in book, will update sooon........
