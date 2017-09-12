
function siteTitleAnim(doo){
  var elem = document.getElementById("siteTitle");
  var pos = 0;
  var posLim = 50;
  var id = setInterval(frame , 1);
  var fontB = 42;
  var fontS = 30;
  function frame(){
    if (pos == posLim ) {
      clearInterval(id)
    } else {
      pos ++;
      if (doo == 0){elem.style.fontSize = fontB - pos/posLim *(fontB - fontS)  + 'px';}
      else{elem.style.fontSize =  fontS - pos/posLim *(fontS - fontB) + 'px';}
    }
  }
}
// sizeAnim(0,42,30,50,document.getElementById("siteTitle").style.fontSize)
function sizeAnim(doo,l,s,ms,elem){
  //var elem = document.getElementById("siteTitle");
  var pos = 0;
  var id = setInterval(frame , 1);
  function frame(){
    if (pos == ms ) {
      clearInterval(id);
    } else {
      pos ++;
      console.log(elem);
      if (doo == 0){elem.style.fontSize = l - pos/ms *(l - s)  + 'px';}
      else{elem.style.fontSize =  s - pos/ms *(s - l) + 'px';}
    }
  }
}
function sizeAnim2(doo,l,s,ms,elem){
  //var elem = document.getElementById("siteTitle");
  var pos = 0;
  var id = setInterval(frame , 1);
  function frame(){
    if (pos == ms ) {
      clearInterval(id);
    } else {
      pos ++;
      console.log(elem);
      if (doo == 0){elem.style.height = l - pos/ms *(l - s)  + 'px';}
      else{elem.style.height =  s - pos/ms *(s - l) + 'px';}
    }
  }
}
function metaHeaderAnim(doo){
  var elem = document.getElementById("meta-header");
  var pos = 0;
  var id = setInterval(frame , 0.7);
  function frame(){
    if (pos == 100 ) {
      clearInterval(id)
    } else {
      pos ++;
      if (doo == 0){elem.style.opacity = 1 - pos/100;}
      else{elem.style.opacity =  pos/100;}
    }
  }
}
// make the font size small

var flag = 0;
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        //document.getElementById("myP").className = "test";
        console.log('works');

        if (flag == 0){
          // siteTitleAnim(0);
          metaHeaderAnim(0);
          sizeAnim(0,38,26,50,document.getElementById("siteTitle"));
          document.getElementById("siteTitle").text='GREY MATTER'
          sizeAnim2(0,26,7,50,document.getElementById("meta-header"));
          flag = 1;
        }
    } else {
        //document.getElementById("myP").className = "";
        if (flag == 1){
          // siteTitleAnim(1);
          metaHeaderAnim(1);
          sizeAnim(1,38,26,50,document.getElementById("siteTitle"));
          document.getElementById("siteTitle").text='GREY MATTER MAGAZINE'
          sizeAnim2(1,26,7,50,document.getElementById("meta-header"));
          flag = 0;
        }
    }
}
