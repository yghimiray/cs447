# Lab 1 Short Answers

1. Explain why do we want sometimes to use setImmediate instead of using setTimeout?
* Ans: Eventhough both the functions are asynchronous functions, the setImmediate function starts from the checking phase instead of the timing phase so that it has short cycle in the event loop.

2. Explain the difference between process.nextTick and setImmediate?
* Ans : 
a. The process.nextTick has the highest priority in the priority queue whereas the setImmediate has lesser. 
b. The process.nextTick can execute from any phases of the event loop and all callbacks are executed at a time whereas the callbacks of setImmediate has certain limits per tick.

3. Name 10 global modules/methods available in Node environment.
a. module
b. exports
c. setTimeOut
d. setInterval
e. process
f. buffer 


