/* javascript htm dom events */

// function message(){
//     alert('yes i am heading tag');
// }

// function dateshow(){
    
//     let date = new Date();
//     let local = date.toLocaleString();
//     let elment = document.querySelector('#date').innerHTML = local;
// }

// function uppercase(){
//     const element = document.getElementById('emails');

//     element.value = element.value.toUpperCase();
// }

// function red(one){
//     one.style.color = 'red';
// }

{
    // function Down(obj){
    //     obj.style.backgroundColor = 'yellow';
    //     obj.innerHTML = "Release me"
    // }

    // function Up(obj) {
    //     obj.style.backgroundColor="#D94A38";
    //     obj.innerHTML="Thank You";
    //   }
}

/* JavaScript addEventListener() */

{
    const x = document.getElementById("clickIt");
        const y = document.getElementById("hoverPara");
          
        x.addEventListener("click", RespondClick);
        y.addEventListener("mouseover", RespondMouseOver);
        y.addEventListener("mouseout", RespondMouseOut);
          
        function RespondMouseOver() {
            document.getElementById("effect").innerHTML +=
                       "MouseOver Event" + "<br>";
        }
          
        function RespondMouseOut() {
            document.getElementById("effect").innerHTML +=
                      "MouseOut Event" + "<br>";
        }
          
        function RespondClick() {
            document.getElementById("effect").innerHTML +=
                      "Click Event" + "<br>";
        }
}