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

function positionElement() {
    var elem = document.getElementById("shit");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    moveElement("shit", 200,200,20);
}

function moveElement(elementID, final_x, final_y, interval) {
    var elem = document.getElementById(elementID);
    
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    
    if ( (xpos == final_x) && (ypos == final_y)) {
        return true;
    }
    if (xpos < final_x)
        xpos++;
    else if (xpos > final_x)
        xpos--;
    if (ypos < final_y)
        ypos++;
    else if (ypos < final_y)
        ypos--;
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    movement = setTimeout(repeat, interval);
}

//addLoadEvent(addPlaceHolder);
//addLoadEvent(prepLnks);
addLoadEvent(positionElement);