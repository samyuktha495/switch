//switch statement example
switch ("thursday") {
    case "monday":
        console.log("today is monday")
        break;
    case "tuesday":
        console.log("today is tuesday")
        break;
    case "wednesday":
        console.log("today is wednesday")
        break;
    case "thursday":
        console.log("today is thursday")
        break;
    case "friday":
        console.log("today is friday")
        break;
    case "saturday":
        console.log("today is saturday")
        break;
    case "sunday":
        console.log("today is sunday")
        break;
    default:
            console.log("please enter a valid day")
}

//for...of loop statements
var a=[1,2,3,4,5];
for(i=1;i<=a.length;i++)
    console.log(i)

//for...of loop statements
var a="samyuktha"
    for(var char of a){
        console.log(char) 
    }
    