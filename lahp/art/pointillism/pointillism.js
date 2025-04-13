console.log("进入界面")
window.onload = (event) => {
  console.log("页面已完全加载");

//   let main = document.getElementsByClassName("post-block")[0];
  let main = document.getElementsByClassName("main-inner")[0];
  let column = document.getElementsByClassName("column")[0];
  console.log(column.style)
  column.style.display = "none";
  console.log(main);
main.classList.add("pointillism");

    console.log(main);
};


    let time=null;

time = setInterval(()=>{
            console.log(document.readyState);
            if(document.readyState == "complete"){
                console.log("页面已完全加载");
                clearInterval(time);}
        },0.1)
   