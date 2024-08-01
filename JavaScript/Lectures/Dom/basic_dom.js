// Document Object Model in JavaScript

// What is Document Object Model (DOM)
// The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents.

// The DOM represents an HTML document as a tree of nodes. The DOM provides functions that allow you to add, remove, and modify parts of the document effectively.

// Note that the DOM is cross-platform and language-independent ways of manipulating HTML and XML documents.

// A document as a hierarchy of nodes
// The DOM represents an HTML document as a hierarchy of nodes. Consider the following HTML document:

// <html>
//     <head>
//         <title>JavaScript DOM</title>
//     </head>
//     <body>
//         <p>Hello DOM!</p>
//     </body>
// </html>

// In this DOM tree, the document is the root node. The root node has one child node which is the <html> element. The <html> element is called the document element.

// Each document can have only one document element. In an HTML document, the document element is the <html> element. Each markup can be represented by a node in the tree.

// Selecting elements

// getElementById() – select an element by id.
// getElementsByTagName()  – select elements by a tag name.
// getElementsByClassName() – select elements by one or more class names.
// querySelector()  – select elements by CSS selectors.

// Element By Id

{
    // function myFun(){
    //     let element = document.getElementById('demo')
    //     element.innerHTML = "Element Find!";
    //     element.style.color = 'red';

    // }

    // let node1 = document.getElementById("demo");
    // let node2 = document.getElementById("parent_container");

    // function func1(){
    //     alert(node1.innerHTML);
    // }

    // function func2(){
    //     alert(node2.innerHTML);
    // }

    
}

// get Element by className

{
//     let element = document.getElementsByClassName("red");
//     console.log(element);

//   function colorChange(){
//     for(let i = 0; i < element.length; i++){
//         element[i].style.color = 'green';
//     }
//   }
}

// get element by tagname

{
    // let element = document.getElementsByTagName('div');
    // console.log(element);

    // function changeColor (){
    //     for(let i = 0; i < element.length; i++){
    //         if(i == 2){
    //             element[i].style.color = 'green';
    //         }
    //         else{
    //             element[i].style.color = 'violet';
    //         }
    //     }
    // }
}

// get element by querySelector()

{
    // let element = document.querySelector('.demo');
    // let element2 = document.querySelectorAll('.demo');

    // function changeColor(){
    //     element.style.color = 'green';
    // }

    // function changeColor2(){
    //     for(let i = 0; i < element2.length; i++){
    //         element2[i].style.color = 'orange';
    //     }
    // }
}

// querySelectorAll()

{
    // let element = document.querySelectorAll('#sun .mercury p');
    // console.log(element);

    // function changeColor(){
    //     for(let i = 0; i < element.length; i++){
    //         element[i].style.color = 'palegreen';
    //     }
    // }
}

//javascript has attribute metod

{
    // let element = document.querySelector('p');
    // console.log(element);

    // function check(){
    //     if(element.hasAttribute('name')){
    //         alert('yes name attribute exist');
    //     }
    //     else{
    //         alert('no name attribute doesnt exist')
    //     }
    // }
}

//javascript get attribute

{    
    // function attr(elem) {
    //   alert(elem.getAttribute("id"));
    // }
}

// javascript set attribute

{
    // let element = document.querySelector('p');

    // function checkAttr(){
    //     alert(element.hasAttribute('name'));
    // }

    // function addAttr(){
    //     element.setAttribute('name','myPara')
    // }
}

// javascript remove attribute

{
    // const element = document.querySelector("button");

    // function remove() {
    //   element.removeAttribute("title");
    // }
}


/* Html Object Accessible */

/*

document.body
document.documentElement
document.forms
document.images
document.links
document.scripts
document.title

*/


{
    //  document.getElementById("demo").innerHTML = document.body.innerHTML;
     
}

{
    // document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
}

{
    // document.getElementById("demo1").innerHTML = "Number of forms tag: " + document.forms.length;
}

{
    // document.getElementById("demo2").innerHTML = "Number of images tag: " + document.images.length;
}

{
    // document.getElementById("demo3").innerHTML = "Number of links tag: " + document.links.length;
}

{
    // document.getElementById("demo4").innerHTML = "Number of scripts: " + document.scripts.length;
}

{
    // document.getElementById("title").innerHTML = "The title of this document is: " + document.title;
}