function counter(val,callback){
    return callback(val-1);
}
function start(val,callback){
    return callback(val);
}

for(var i=10;i>=0;i--){
    start(i,function (value){
		if(value!=0)
        console.log(value+"..");
           else if(value==0){
                counter(value, function (valuefinal){
					console.log(value+"");
                    console.log("Time's Up!!!");
                });
            }
    });
};