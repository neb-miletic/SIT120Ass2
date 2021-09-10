function task1() {
    let text = document.getElementById("task1").innerHTML;
     
    document.getElementById("task1").innerHTML = text.replace("Banana", "Apple");


}

function countChars() {

    let chars = document.getElementById("inputText").value;

    let count = chars.length;
    document.getElementById("showText").innerHTML = count;
    
}

function roundFloat() {

    let nums = parseFloat(document.getElementById("inputNum").value);
    let dot = nums.toFixed(2);
    document.getElementById("showNum").innerHTML = dot;
    
} 

function popLast() {
    const array = [ "Student", "Lecturer", "Apple", "Banana"];

    

    document.getElementById("popLast").innerHTML = array.pop();
}


function setDate() {
 
    const date = new  Date()
     document.getElementById("timer").innerHTML = date.getFullYear()+ '-'+(date.getMonth())+'-'+date.getDate();
}

function setTime() {
    var now = new Date();

    document.getElementById("timerTime").innerHTML = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
    
}

