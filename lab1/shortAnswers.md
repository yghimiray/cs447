# Lab 1 Short Answers

1. Explain why do we want sometimes to use setImmediate instead of using setTimeout?
Ans: Eventhough both the functions are asynchronous functions, the setImmediate function starts from the checking phase instead of the timing phase so that it has short cycle in the event loop.

2. Explain the difference between process.nextTick and setImmediate?
Ans : the process.nextTick has the highest priority in the priority queue whereas the setImmediate has lesser. The process.nextTick can execute from any phases of the event loop.

3. Name 10 global modules/methods available in Node environment.


