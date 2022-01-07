//get values(string) from the page(controller func)
function getValue(){
    document.getElementById("alert").classList.add("invisible");
    let userString=document.getElementById('userString').value;
    let revString=resverseString(userString);
    displayString(revString);
}
//reverse the string(logic func)
function resverseString(userString){
    let revString=[];
    //rever string using for loop
    for (let index = userString.length-1; index >= 0; index--) {
        revString += userString[index];
        
        
    }
    return revString;
}
//display the resversed string(view func)
function displayString(revString){
    //write to the page
    document.getElementById('msg').innerHTML=`Your string reversed is: ${revString}`;
    //turn on alert, classList only remove perticular class(invisible)
    document.getElementById('alert').classList.remove('invisible');
}
// 