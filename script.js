setTimeout(() => {
    var count=5;
        document.getElementById("number").innerText = count;
        count--;
        setTimeout(() => {
            document.getElementById("period1").innerText = ".";
            setTimeout(() => {
                document.getElementById("period2").innerText = ".";
                setTimeout(() => {
                    document.getElementById("number").innerText = count;
                    count--;
                    document.getElementById("period1").innerHTML = "&nbsp;";
                    document.getElementById("period2").innerHTML = "&nbsp;";
                    setTimeout(() => {
                        document.getElementById("period1").innerText = ".";
                        setTimeout(() => {
                            document.getElementById("period2").innerText = ".";
                            setTimeout(() => {
                                document.getElementById("number").innerText = count;
                                count--;
                                document.getElementById("period1").innerHTML = "&nbsp;";
                                document.getElementById("period2").innerHTML = "&nbsp;";
                                setTimeout(() => {
                                    document.getElementById("period1").innerText = ".";
                                    setTimeout(() => {
                                        document.getElementById("period2").innerText = ".";
                                        setTimeout(() => {
                                            document.getElementById("number").innerText = count;
                                            count--;
                                            document.getElementById("period1").innerHTML = "&nbsp;";
                                            document.getElementById("period2").innerHTML = "&nbsp;";
                                            setTimeout(() => {
                                                document.getElementById("period1").innerText = ".";
                                                setTimeout(() => {
                                                    document.getElementById("period2").innerText = ".";
                                                    setTimeout(() => {
                                                        document.getElementById("number").innerText = count;
                                                        count--;
                                                        document.getElementById("period1").innerHTML = "&nbsp;";
                                                        document.getElementById("period2").innerHTML = "&nbsp;";
                                                        setTimeout(() => {
                                                            document.getElementById("period1").innerText = ".";
                                                            setTimeout(() => {
                                                                document.getElementById("period2").innerText = ".";
                                                                setTimeout(() => {
                                                                    document.getElementById("number").innerHTML = "Time's Up!!!";
                                                                    document.getElementById("period1").innerHTML = "";
                                                                    document.getElementById("period2").innerHTML = "";
                                                                }, 500);
                                                            }, 250);
                                                        }, 250);
                                                    }, 500);
                                                }, 250);
                                            },250);
                                        },500);
                                    },250);
                                },250);
                            },500);
                        },250);
                    },250)
                },500);
            },250);
        },250);  
    },500);


/*
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
*/