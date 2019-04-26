  function changeImage()
{
element=document.getElementById('example')
if (element.src.match(/*4*/"https://raw.githubusercontent.com/sarabolindberg/Til-Joanna/master/billede4.jpg"))
  {
  element.src=/*1*/"https://indd.adobe.com/view/ea1ec3e8-ec99-4e74-87f7-dccf3e1d6ad8";
    ;
  }
else if (element.src.match(/*3*/"https://raw.githubusercontent.com/sarabolindberg/Til-Joanna/master/billede3.jpg"))
  {
         
  element.src=/*4*/"https://raw.githubusercontent.com/sarabolindberg/Til-Joanna/master/billede4.jpg";
         
  }
  else if (element.src.match(/*2*/"https://raw.githubusercontent.com/sarabolindberg/Til-Joanna/master/billede2.jpg")){
    element.src=/*3*/"https://raw.githubusercontent.com/sarabolindberg/Til-Joanna/master/billede3.jpg"
  }
  
  else {
    element.src=/*2*/"https://raw.githubusercontent.com/sarabolindberg/Til-Joanna/master/billede2.jpg";
  }
}
