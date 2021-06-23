const buf = Buffer.from('Hey!'); //create a buffer
//Those numbers are the UTF-8 bytes that identify the characters in the buffer (H → 72, e → 101, y → 121). 
// This happens because Buffer.from() uses UTF-8 by default. 
console.log(buf[0]); //72
console.log(buf[1]); //101
console.log(buf[2]); //121
console.log(buf.toString());
console.log(buf.length);
for (const item of buf) {
    console.log(item); //72 101 121 33
}

//initialize the buffer passing the size
//the Buffer created by alloc will be initialized with zeroes
const buff = Buffer.alloc(4);
buff.write('Hey!');
console.log(buff.toString());
buff[1] = 111 //o in UTF-8
console.log(buff.toString()) //Hoy!