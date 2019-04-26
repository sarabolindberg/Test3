  function changeImage()
{
element=document.getElementById('example')
if (element.src.match(/*4*/"https://www.redwallpapers.com/public/redwallpapers-large-thumb/sea-waves-black-surface-water-free-stock-photo-image-wallpaper.jpg"))
  {
  element.src=/*1*/"Image1.jpg";
    ;
  }
else if (element.src.match(/*3*/"http://www.digitalmusicnews.com/wp-content/uploads/2017/05/psy_BTS.jpg"))
  {
         
  element.src=/*4*/"https://www.redwallpapers.com/public/redwallpapers-large-thumb/sea-waves-black-surface-water-free-stock-photo-image-wallpaper.jpg";
         
  }
  else if (element.src.match(/*2*/"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kpop-1550876387.png")){
    element.src=/*3*/"http://www.digitalmusicnews.com/wp-content/uploads/2017/05/psy_BTS.jpg"
  }
  
  else {
    element.src=/*2*/"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kpop-1550876387.png";
  }
}
