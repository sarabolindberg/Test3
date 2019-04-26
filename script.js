  function changeImage()
{
element=document.getElementById('example')
if (element.src.match("https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/1393736_10152001804709359_1707936580_n.jpg?_nc_cat=108&_nc_ht=scontent.fhfa2-2.fna&oh=0038bb7a8fe0895f214011337651a9a6&oe=5D6D9AFB"))
  {
  element.src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/58374508_109275966945643_7631695777303101440_n.jpg?_nc_cat=110&_nc_ht=scontent.fhfa2-2.fna&oh=5994484464dea8892880953044577909&oe=5D2E8DE7";
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

