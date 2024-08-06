// $("#first_head").hover(function(){
//    alert("you enter in h1!")

// },function(){
//     alert('you leave h1')
// });


// $("#toggle_btn").on({
//     mouseenter : function(){
//         $(this).css({"background-color" :'orange',
//             "color":"white"
//         });
//     },
//     mouseleave : function(){
//         $(this).css({"background-color":"green",
//             "color":'white'
//         });
//     },
//     click:function(){
//         $(this).css({
//             "background-color":"red",
//             "color":"white"
//         })
//     }
// })


$("#hide").click(function(){
    $("p").hide(3000);
 
})

$("#show").click(function(){
    $("p").show(3000);
  
})


$("#toggle").click(function(){
    $("p").toggle(3000);
})


$("#fade-btn").click(function(){
    $("#box1").fadeIn(3000);
    $("#box2").fadeIn(5000);
    $("#box3").fadeIn(7000);
})

$("#fade").click(function(){
    $("#box").fadeToggle(3000)
})

$("#slide").click(function(){
    $("#box").slideToggle(3000);
})

$("#cute_animate").click(function(){
    $("#animate_box").animate({
        left : "200px",     
    },3000)
});

