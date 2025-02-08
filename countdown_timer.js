// Ruth's first countdown Timer -->
function countdown(){
    var countDownDate = new Date("Jan 12, 2026 16:00:00").getTime();

    // we are creating a parameter  to store the date to which we are counting to
    // to create this variable we use "var [name of parameter]"
    // we then initialize the parameter using a specific data type corresponding to the type of data the parameter will hold
    // example of datatypes:   int, string ,Date, Vector .....

    // Update the countdown  every second

    var x = setInterval(function(){
    
        //Get Current date and time 
    var now   = new Date().getTime();

        //find the distance betweeen the countdown date and current date
    var dist = countDownDate - now;

        //time calculations 

    var day = Math.floor(dist/(1000*60*60*24));
    var hours = Math.floor((dist%(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor(dist%((1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((dist%(1000*60))/1000);

        //Displaying the countdown clock 
    document.getElementById("demo").innerHTML= "countdown: "+day + "d " + hours + "h " + mins +"m " + secs + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
    
},1000)

}


// Ruth(int a , int b, String C ){}