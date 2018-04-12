const cv = require('opencv');

cv.readImage("./2.jpg", function(err, im){
    im.detectObject(cv.FACE_CASCADE, {}, function(err, faces){
          for (var i=0;i<faces.length; i++){
                  var x = faces[i]
                          im.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);
                      }
          let pesan = "jumlah orang ada " + faces.length;
          console.log(pesan);    
          im.save('./out-2.jpg');
              console.log('gambar di simpen');
                });
})
