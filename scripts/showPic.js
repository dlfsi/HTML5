function showPic1(pictureNo) {
    var source, pHolder, text, discrip;
    source = pictureNo.getAttribute("href");
    //if (!document.getElementById("purchase")) { return false; }
    pHolder = document.getElementById("placeholder");
    pHolder.setAttribute("src", source);
    
    text = pictureNo.getAttribute("title");
    discrip = document.getElementById("description");
    discrip.firstChild.nodeValue = text; 
    return false;
}

function popUp(winURL) {
    window.open(winURL, "popup", "width=320,height=480");
}

function showPic2(whichpic) {
  if (!document.getElementById("placeholder")) return true;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  if (!document.getElementById("description")) return false;
  if (whichpic.getAttribute("title")) {
    var text = whichpic.getAttribute("title");
  } else {
    var text = "";
  }
  var description = document.getElementById("description");
  if (description.firstChild.nodeType == 3) {
    description.firstChild.nodeValue = text;
  }
  return false;
}

function prepareGallery() {
  //if (!document.getElementsByTagName) return false;
  //if (!document.getElementById) return false;
  //if (!document.getElementById("imageList")) return false;
  var gallery = document.getElementById("imageList");
  var links = gallery.getElementsByTagName("a");
  for ( var i=0; i < links.length; i++) {
    links[i].onclick = function() {
      return showPic2(this);
	}
    links[i].onkeypress = links[i].onclick;
  }
}

function chgText() {
    var pText = document.getElementById("shit");
    //pText.innerHTML = "<p>Insert something shit!</p>";
    var newNode = document.createElement("p");
    pText.appendChild(newNode);
    var newText = document.createTextNode("this is a new paragraph");
    pText.appendChild(newText);
}

function prepLnks() {
    var i, plinks, links;

    if (!document.getElementById) { return false; }
    
    var plinks = document.getElementById("imageList");
    var links = plinks.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic1(this);
        }
    }
    //links[i].onkeypress = links[i].onclick;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function addPlaceHolder() {
    var pHolder = document.createElement("img");
    
    pHolder.setAttribute("id", "placeholder");
    pHolder.setAttribute("src", "images/empty.jpg");
    pHolder.setAttribute("alt", "image library");
    
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var descText = document.createTextNode("choose an image");
    description.appendChild(descText);
    
    var pText = document.getElementById("shit");
    pText.parentNode.insertBefore(pHolder, pText);
    pText.parentNode.insertBefore(description, pText);    
    //document.body.appendChild(pHolder);
    //document.body.appendChild(description);
}


addLoadEvent(addPlaceHolder);
addLoadEvent(prepLnks);