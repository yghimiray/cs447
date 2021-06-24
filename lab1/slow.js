// Fix the slow function to be asynchronous/non-blocking
function slow(callback){ 
	// for(let i=0; i<= 5e8; i++){}
    let random = Math.random();
    console.log(random);
	if ( random > 0.5) { 	
		return callback("Error",null) 
	} 
	return callback(null, {id:12345}) 
} 

function exec(fn){ 
	let obj = {};

    function callback (error,data){
        obj.done = function(cb){
            if(error === null){
                cb(data);
            }
            return this;
        }
        obj.fail= function(cb){
            if(error !== null){
                cb(error);
            }
            return this;
        }
    }

    fn(callback);
    
    return obj;
}

exec(slow).done(function(data){ console.log(data); })
	.fail(function(err){ console.log("Error: " + err); }); 