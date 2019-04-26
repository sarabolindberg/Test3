  function changeImage()
{
element=document.getElementById('example')
if (element.src.match(/*4*/"Image4.jpg"))
  {
  element.src=/*1*/"Image1.jpg";
    ;
  }
else if (element.src.match(/*3*/"Image3.jpg"))
  {
         
  element.src=/*4*/"Image4.jpg";
         
  }
  else if (element.src.match(/*2*/"Image2.jpg")){
    element.src=/*3*/"Image3.jpg"
  }
  
  else {
    element.src=/*2*/"Image2.jpg";
  }
}
