 var i = 0;
    var output = "# # # #";
    do {
        //i%2 != 0 ? console.log(' ' + output) : console.log(output);
        if(i%2 != 0){
            console.log(' ' + output);
        }else{
            console.log(output);
        }
        i++;
    } while (i < 8)