

function headerAnim() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
// make the meta header disappear
function metaHeaderDisappear(){
  var elem = document.getElementById("siteTitle");
  var pos = 0;
  var id = setInterval(frame , 1);
  function frame(){
    if (pos == 100 ) {
      clearInterval(id)
    } else {
      pos ++;
      elem.style.opacity = 1 - pos/ 100;

    }

  }
}

function metaHeaderAppear(){
  var elem = document.getElementById("siteTitle");
  var pos = 0;
  var id = setInterval(frame , 1);
  function frame(){
    if (pos == 100 ) {
      clearInterval(id)
    } else {
      pos ++;
      elem.style.opacity =  pos/ 100;

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
          metaHeaderDisappear();
          flag = 1;
        }
    } else {
        //document.getElementById("myP").className = "";
        if (flag == 1){
          metaHeaderAppear();
          flag = 0;
        }
    }
}
