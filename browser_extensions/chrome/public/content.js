/*
 * Send images to popup on request
 */
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  console.log("Witnessing Page ٩(๏_๏)۶");
  
  if ((msg.from === 'popup')) {
    images = find_images();
    response({images: images});
  }
});

/*
 * Finds all the images on the page
 */
function find_images() {
  var images = document.images;
  var imageLinks = []
  for (var i = 0; i < images.length; i++) {
    var imageSrc = images[i].src;
    if (imageSrc != "") { // For some reason we were getting empty images
      imageLinks.push(imageSrc);
    }
  }
  return imageLinks;
}




