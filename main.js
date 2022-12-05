
let div1 = document.getElementById("form");
div1.style.cssText = "background:gray; display:flex; padding:20px; margin:5px; justify-content: space-between;border-radius:6px;";
let text = document.getElementById("input");
text.style.cssText = "width:1000px; height:30px;border-radius:6px;border-color:black;";
let btn = document.getElementById("add");
btn.style.cssText="background:red; border-radius:6px; border-color:gray;font-size:16px;font-weight:bold;color:white;"
let div2 = document.getElementById("tasks");
div2.style.cssText = "margin-top:-100px;background:gray;display:flex-box;padding:70px;margin-top:20px;border-radius:6px;";
let div_arr = [];

let textArr = [];
if (window.localStorage.getItem("tasks"))
{
    div_arr.push(window.localStorage.getItem("tasks"));
    div2.innerHTML = div_arr;
}

function getVal() {
    if(text.value!="")
    textArr.push(text.value);
//console.log(textArr.join(",")); 
}
function Newdiv() {
    let newdiv= document.createElement('div');
    newdiv.style.cssText = " display:flex;padding:20px;width:100%;background:white;border-radius:6px; justify-content:space-between; margin-bottom:20px;";
    newdiv.textContent = textArr.slice(-1);
    //create delete btn:
  let dletebtn = document.createElement('input');
    dletebtn.setAttribute("type", "button");
    dletebtn.setAttribute("value", "Delete");
    dletebtn.style.cssText="display:flex-box;background:red; border-radius:6px; border-color:gray;font-size:16px;font-weight:bold;color:white; "
 
    if (text.value != "") {
        newdiv.appendChild(dletebtn);
        text.value = "";
        div2.appendChild(newdiv);
        //local storge:
        div_arr.push(newdiv.outerHTML);

        window.localStorage.setItem("tasks", div_arr);   
       

    }
    //delete div
    dletebtn.onclick =function(){
        console.log("Deleted");
        //newdiv.removeChild(dletebtn);
        div2.removeChild(newdiv);
        
        window.localStorage.setItem("tasks", div2.innerHTML); 
       
    
    }
    
}



