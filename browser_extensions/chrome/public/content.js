/*
 * Send images to popup on request
 */
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  console.log("Witnessing Page ٩(๏_๏)۶");
  if ((msg.from === 'popup')) {
    //images = find_images();
    images = find_and_send_everything();
    response({images: images});

  }
  console.log("okay this worked");
});

/*
 * Coalesces the functionality of find_images(), find_backroundImg(), and send_req() wrapped
 * with an exception.
 * return: the Array of all img and bakcround image elements that were sent via Ajax request
 */
function find_and_send_everything(){
  try {
    /*
    var array = find_images();
    ajax_req(find_backroundImg(array));
    return array; */
   return ajax_req(find_backroundImg(find_images()));
  //return ajax_req(find_images());
  }
  catch(error) {
    console.error(error);
    return -1;
  }
}
/*
 * Finds all the images on the page
 * return: Array of all non-empty image sources
 */
function find_images() {
  var images = document.images;
  //var imageLinks = new Set();
  var imageLinks = [];
  for (let i = 0; i < images.length; i++) {
    let imageSrc = images[i].src;
    if (imageSrc != "") { // For some reason we were getting empty images
      imageLinks.push(imageSrc);
     // imageLinks.add(imageSrc);
    }
  }
  return imageLinks;
}

/*
 * Itterate through all html elements to find backround-image(s)
 * paramater: imageLinks is the array returned from find_image()
 * returns: Array of find_images() + all non-empty/null/undefined backround-images
 */
function find_backroundImg(imageLinks){

  // cody by stackoverflow user: ghost rider ID: 1599177
  var bodyElements = document.getElementsByTagName('body');

  for (var childItem in bodyElements.childNodes){
    if (bodyElements.childNodes[childItem].style['backround-image'] != null){
      imageLinks.push(bodyElements.childNodes[childItem]);
    }
  }
  return imageLinks;
}

/*
 * Sends an Ajax request for every element imaheLinks
 * paramater: imageLinks is the array from find_backroundImg(find_images())
 * return: imageLinks
 */
function ajax_req(imageLinks){
  let count = 0; 
  const iter = imageLinks.entries();
  for (let i of iter) {
    //console.log(i);
    setTimeout(function(x){sendUrl(x);}(i),count*250); // sends image link to server with a 250ms delay 
    count++;
  } 
  return imageLinks; 
}
/*
 * Sends url object to a server via Ajax request
 * paramater: url is an element of the Array from find_backroundImg(find_images())
 */
function sendUrl(url){
  $.ajax({
    url: "https://reqres.in/api/users",
    type: "POST",
    data: {
    
      imageURl: url
    },
    success: function(response){
      console.log(response);
    }
  });
}

/*************Code Storage*************

  console.log(imageLinks);
  imageLinks.forEach((e)=>{
   // console.log(e);
    setTimeout(function(x){sendUrl(x);}(e),count*250); // sends image link to server
    count++;
  })



function find_backroundImg(imageLinks){
  var all = $("*"); // gets every html element
  for (let i in all){
    let imageSrc = $(i).css("background-image"); // gets backround-image of element
    /*if (Array.isArray(imageSrc)){ // checks if an element has multiple backround images
      let iterater = imageSrc.entries();
      for(let j of iterater){
        if (!((j == "") || (j == "none") || (j == "undefined"))){
          imageLinks.push(j);
        }
      }
    } */
   /* else if (!((imageSrc == "") || (imageSrc == "none") || (imageSrc == "undefined"))) { 
      imageLinks.push(imageSrc);
    }
  }  
  return imageLinks;
}
   */