var buf = new Buffer("Mayank");
console.log(buf.toString('ascii'));
var json = buf.toJSON();
console.log(json);
var b1 = new Buffer("Mayank");
var b2 = new Buffer("Agarwal");
var b3 = Buffer.concat([b1,b2]);
console.log(b3.toString('ascii'));
var b4 = b3.slice(0,6);
console.log(b4.toString("ascii"));
