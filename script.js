  function changeImage()
{
element=document.getElementById('example')
if (element.src.match("https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/1393736_10152001804709359_1707936580_n.jpg?_nc_cat=108&_nc_ht=scontent.fhfa2-2.fna&oh=0038bb7a8fe0895f214011337651a9a6&oe=5D6D9AFB"))
  {
  element.src="https://www.crccasia.com/wp-content/uploads/2018/05/_20180529160156-1-e1527585813431.jpg";
    ;
  }
else if (element.src.match("http://www.digitalmusicnews.com/wp-content/uploads/2017/05/psy_BTS.jpg"))
  {
         
  element.src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/1393736_10152001804709359_1707936580_n.jpg?_nc_cat=108&_nc_ht=scontent.fhfa2-2.fna&oh=0038bb7a8fe0895f214011337651a9a6&oe=5D6D9AFB";
         
  }
  else if (element.src.match("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kpop-1550876387.png")){
    element.src="http://www.digitalmusicnews.com/wp-content/uploads/2017/05/psy_BTS.jpg"
  }
  
  else {
    element.src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kpop-1550876387.png";
  }
}

