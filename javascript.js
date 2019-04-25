  function changeImage()
{
element=document.getElementById('example')
if (element.src.match("https://www.redwallpapers.com/public/redwallpapers-large-thumb/sea-waves-black-surface-water-free-stock-photo-image-wallpaper.jpg"))
  {
  element.src="https://www.crccasia.com/wp-content/uploads/2018/05/_20180529160156-1-e1527585813431.jpg";
    ;
  }
else if (element.src.match("http://www.digitalmusicnews.com/wp-content/uploads/2017/05/psy_BTS.jpg"))
  {
         
  element.src="https://www.redwallpapers.com/public/redwallpapers-large-thumb/sea-waves-black-surface-water-free-stock-photo-image-wallpaper.jpg";
         
  }
  else if (element.src.match("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kpop-1550876387.png")){
    element.src="http://www.digitalmusicnews.com/wp-content/uploads/2017/05/psy_BTS.jpg"
  }
  
  else {
    element.src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kpop-1550876387.png";
  }
}

