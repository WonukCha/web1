var Links ={
  setTagColor:function(tag,color){
  //   var alist = document.querySelectorAll('a')
  //   var i = 0;
  //   while(i < alist.length)
  //   {
  //     alist[i].style.color = color;
  //     i = i+1;
  //   }
  // }
  $(tag).css('color',color);
  }
}
var Body ={
  setColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}

function nightdayHandler(selt)
{
  var taget = document.querySelector('body');
  if(selt.value === 'night')
  {
    Body.setColor('white');
    Body.setBackgroundColor('black');
    selt.value = 'day';
    Links.setTagColor('a','powderblue');

  }
  else
  {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    selt.value = 'night';
    Links.setTagColor('a','blue');

  }
}
