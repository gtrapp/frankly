// document.addEventListener("DOMContentLoaded", function(event) {
	var video = document.getElementById('videoclip');
	var videosource = document.getElementById('videoURL');
	var contentURL = videosource.getAttribute('src');
	var thumb = document.getElementsByClassName("thumb");
	var videoTitle = document.getElementById('vidTitle');

	video.setAttribute('poster', jsonList[0].image_url);

	function newVideo(clicked_object) {
	    var thumbData = clicked_object;
	    //console.log(thumbData.getAttribute("data-video"));
	    var imgNoBorder = document.getElementsByClassName("noBorder");
	    var imgBorder = document.getElementsByClassName("border");
	    video.pause();
	    videosource.setAttribute('src', thumbData.getAttribute("data-video"));
	    videoTitle.innerHTML = thumbData.getAttribute("data-title");

	    video.load();
	    video.play();

	}

	video.onended = function() {
	    nextVideo(videosource.getAttribute('src'));
	};

	function nextVideo(vidSrc) {

	    var vid_01 = jsonList[0].content_url;
	    var vid_02 = jsonList[1].content_url;
	    var vid_03 = jsonList[2].content_url;
	    var vid_04 = jsonList[3].content_url;
	    var vid_05 = jsonList[4].content_url;

	    var thumb_01 = document.getElementsByClassName("thumb-img")[0];
	    var thumb_02 = document.getElementsByClassName("thumb-img")[1];
	    var thumb_03 = document.getElementsByClassName("thumb-img")[2];
	    var thumb_04 = document.getElementsByClassName("thumb-img")[3];
	    var thumb_05 = document.getElementsByClassName("thumb-img")[4];


	    switch (true) {
	        case vidSrc == vid_01:
	            videosource.setAttribute('src', vid_02);
	            video.load();
	            video.play();
	            videoTitle.innerHTML = jsonList[1].title;
	            thumb_01.style.border = 'none';
	            thumb_02.style.border = '2px solid #ff0000';
	            break;
	        case vidSrc == vid_02:
	            videosource.setAttribute('src', vid_03);
	            video.load();
	            video.play();
	            videoTitle.innerHTML = jsonList[2].title;
	            thumb_02.style.border = 'none';
	            thumb_03.style.border = '2px solid #ff0000';
	            break;
	        case vidSrc == vid_03:
	            videosource.setAttribute('src', vid_04);
	            video.load();
	            video.play();
	            videoTitle.innerHTML = jsonList[3].title;
	            thumb_03.style.border = 'none';
	            thumb_04.style.border = '2px solid #ff0000';
	            break;
	        case vidSrc == vid_04:
	            videosource.setAttribute('src', vid_05);
	            video.load();
	            video.play();
	            videoTitle.innerHTML = jsonList[4].title;
	            thumb_04.style.border = 'none';
	            thumb_05.style.border = '2px solid #ff0000';
	            break;
	        default:
	            videosource.setAttribute('src', vid_01);
	            video.load();
	            video.play();
	            videoTitle.innerHTML = jsonList[0].title;
	            thumb_05.style.border = 'none';
	            thumb_01.style.border = '2px solid #ff0000';
	            break;
	    }
	}

	function addBorder(id) {
	    //console.log(id);
	    var thumbimg = document.getElementsByClassName("thumb-img");
	    for (i = 0; i < thumbimg.length; i++) {
	        thumbimg.item(i).style.border = 'none';
	    }
	    id.style.border = '2px solid #ff0000';
	}
