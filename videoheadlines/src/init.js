var jsonList;

function callback(arr) {
    jsonList = arr.playlist;
    var thumbs = "";
    var title1 = jsonList[0].title;
    var contURL = arr.playlist[0].content_url;

    var videoSrc = '<source id="videoURL" src="' + arr.playlist[0].content_url + '" type="video/mp4">';
    var i;
    for( i = 0; i < arr.playlist.length; i++ ) {
         //out += '<a href="' + arr.playlist[i].image_url + '">' + arr.playlist[i].title + '</a><br>';
        thumbs += '<div class="thumb" data-title="' + arr.playlist[i].title + '" data-video="' + arr.playlist[i].content_url + '"onclick="newVideo(this)" ><img class="thumb-img" src="' + arr.playlist[i].image_url + '"onclick="addBorder(this)" ><span>' + arr.playlist[i].title + '</span> </div>';

    }
    document.getElementById("thumbContainer").innerHTML = thumbs;
    document.getElementById("videoclip").innerHTML = videoSrc;
    document.getElementById("vidTitle").innerHTML = title1;
    document.getElementsByClassName("thumb-img")[0].style.border = '2px solid #ff0000';
}
