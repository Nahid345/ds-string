//Ques- Truncate the text
// Write a function callded truncate that checks the length of a giver a string,-str and if 
// it surpasses a specified maxium length, maxlength, it replace the end of the string
// with the ellipsis character '...' so that the length matches the maximum length

// input: str = "subscribe to RoadsideCodeder" , maxlength =9
// ouput: "Subscribe..."'

function truncate(str, maxlength){
    if(str.length> maxlength){
        return str.slice(0,maxlength)+ "..."
    }
    else return str;
}

console.log(truncate("subscribe to RoadsideCodeder",9))