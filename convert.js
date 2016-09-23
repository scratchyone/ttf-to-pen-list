var opentype = require("opentype.js");
var fs = require("fs");
var streamBuffers = require('stream-buffers');
var Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(50, 70)
  , ctx = canvas.getContext('2d');
  var stream = require( "stream" );
  function getDataFromLetter(l,item) {
    var Canvas = require('canvas')
      , Image = Canvas.Image
      , canvas = new Canvas(75, 70)
      , ctx = canvas.getContext('2d');
    var im=""
  opentype.load('font.ttf', function(err, font) {
      if (err) {
           console.log('Font could not be loaded: ' + err);
      } else {
          var path = font.getPath(l, 0, 60, 72);
          path.draw(ctx);
          var data = canvas.toDataURL().replace(/^data:image\/\w+;base64,/, "");
          var buf = new Buffer(data, 'base64');
          var fs = require("fs");
          var myReadableStreamBuffer = new streamBuffers.ReadableStreamBuffer({
              frequency: 10,   // in milliseconds.
              chunkSize: 2048  // in bytes.
          });
              PNG = require('pngjs').PNG;
          myReadableStreamBuffer.put(buf)
          myReadableStreamBuffer
              .pipe(new PNG({
                  filterType: 4
              }))
              .on('parsed', function() {

                  for (var y = 0; y < this.height; y++) {
                    for (var x = 0; x < this.width; x++) {
                          var idx = (this.width * y + x) << 2;
                          if(this.data[idx]+this.data[idx+1]+this.data[idx+2]==0&&this.data[idx+3]!=0) {
                            im=im+"b";
                          } else {
                            im=im+"w";
                        }
                      }
                      im=im+"n";
                      img=im;
                  }
str = img.split("");
split=[]
start = 0;
end = "";
prevchar = str[0];
for (i = 0; i < str.length + 1; i++) {
    if (prevchar != str[i]) {
        end = i;
        split.push(str.slice(start, end));
        prevchar = str[i];
        start = i
    }
}
concat=""
for(i=0;i<split.length;i++) {
if(split[i].length>1) {concat=concat+split[i].length+split[i][0]} else {concat=concat+split[i][0]}
}
                  arr[chars.charCodeAt(item)]=img
              });
      }
  });
}
arr=[]
for(i=0;i<128;i++) {
  arr.push("")
}
var img = ""
var im = "";
var chars="0123456789 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.?!'\"-"
for(i=0;i<chars.length-1;i++) {
  getDataFromLetter(chars[i],i)
}
setTimeout(function() {
fs.writeFileSync("text.txt",arr.join("\n"))
},5000
)
