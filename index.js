var imgArr = ["meeting-intro.png","meeting1.png","meeting2.png","meeting3.png","meeting4.png"];

function displayPodcast(){
    var podcasts = Math.floor(Math.random() * (imgArr.length));
    document.podcasts.src="images-meetings/" + imgArr[podcasts];
}
