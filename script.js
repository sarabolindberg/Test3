  function changeImage()
{
element=document.getElementById('example')
if (element.src.match(/*4*/"https://raw.githubusercontent.com/sarabolindberg/Til-Joanna/master/image4.jpg"))
  {
  element.src=/*1*/"https://github.com/sarabolindberg/Til-Joanna/blob/master/test1.jpg?raw=true";
    ;
  }
else if (element.src.match(/*3*/"https://github.com/sarabolindberg/Til-Joanna/blob/master/image3.jpg?raw=true"))
  {
         
  element.src=/*4*/"https://raw.githubusercontent.com/sarabolindberg/Til-Joanna/master/image4.jpg";
         
  }
  else if (element.src.match(/*2*/"https://raw.githubusercontent.com/sarabolindberg/Til-Joanna/master/image2.jpg")){
    element.src=/*3*/"https://github.com/sarabolindberg/Til-Joanna/blob/master/image3.jpg?raw=true"
  }
  
  else {
    element.src=/*2*/"https://raw.githubusercontent.com/sarabolindberg/Til-Joanna/master/image2.jpg";
  }
}
