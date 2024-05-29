// vars
var img = _('.thumbnail img'),
    canvas = _('#cs'),
    result = _('.result'),
    preview = _('.preview'),x = '',y = '';



// click function
img.addEventListener('click', function(e){
  // chrome
  if(e.offsetX) {
    x = e.offsetX;
    y = e.offsetY; 
  }
  // firefox
  else if(e.layerX) {
    x = e.layerX;
    y = e.layerY;
  }
  useCanvas(canvas,img,function(){
    // get image data
    var p = canvas.getContext('2d')
    .getImageData(x, y, 1, 1).data;
    // show info
    result.innerHTML = '<span>HEX: '+rgbToHex(p[0],p[1],p[2])+'</span>'+
     '<span>RGB:  rgb('+
      p[0]+','+
      p[1]+','+
      p[2]+')</span>';
    
    // add background in body
    document.body.style.background =rgbToHex(p[0],p[1],p[2]);
  });
},false);

// preview function mousemove
img.addEventListener('mousemove', function(e){
  // chrome
  if(e.offsetX) {
    x = e.offsetX;
    y = e.offsetY; 
  }
  // firefox
  else if(e.layerX) {
    x = e.layerX;
    y = e.layerY;
  }
  
  useCanvas(canvas,img,function(){
    
    // get image data
    var p = canvas.getContext('2d')
    .getImageData(x, y, 1, 1).data;
    // show preview color
    preview.style.background = rgbToHex(p[0],p[1],p[2]);
  });
},false);


// canvas function
function useCanvas(el,image,callback){
  el.width = image.width; // img width
  el.height = image.height; // img height
  // draw image in canvas tag
  el.getContext('2d')
  .drawImage(image, 0, 0, image.width, image.height);
  return callback();
}
// short querySelector
function _(el){
  return document.querySelector(el);
};

// convert rgba to hex 
// http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}