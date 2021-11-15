var video = document.querySelector("#player1");
// document.getElementById('volume').innerHTML ='100%';


// var val = document.getElementById('slider').value;

// video.muted = true
// if (video.muted == true) {
// 	document.getElementById('mute').innerHTML = 'Unmute';
// 	document.getElementById('volume').innerHTML =`0%`;
// 	document.getElementById('slider').value = 0;
// } else {
// 	document.getElementById('volume').innerHTML =`${val}%`;
// 	document.getElementById('mute').innerHTML = 'Mute';
// 	document.getElementById('slider').value = 100;
// }


window.addEventListener("load", function() {
		console.log("Good job opening the window");
	}
);

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	var slider_val = document.getElementById('slider').value;
	document.getElementById('volume').innerHTML =`${slider_val}%`;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -=0.05
	console.log("Playback Rate is now: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate +=0.05
	console.log("Playback Rate is now: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {

	if (video.currentTime + 15 > video.duration){
		video.currentTime = 0;

	} else {
		video.currentTime += 15;
	}
	console.log(`Skipped! Now we at: ${video.currentTime}s`);
});

document.querySelector("#mute").addEventListener("click", function() {


	if (video.muted == false) {
		console.log('MUTE');
		video.muted = true;
		document.getElementById('volume').innerHTML = 'Muted';
		document.getElementById('mute').innerHTML = 'Unmute';


	} else if (video.muted == true) {
		var slider_val = document.getElementById('slider').value;

		console.log('UNMUTE');
		video.muted = false;
		document.getElementById('mute').innerHTML = 'Mute';
		document.getElementById('volume').innerHTML =`${slider_val}%`;


	}

});


document.querySelector("#slider").addEventListener("click", function() {

	var slider_val = document.getElementById('slider').value;
	video.volume = slider_val*0.01
	console.log(`Volume at: ${slider_val}%`)
	document.getElementById('volume').innerHTML =`${slider_val}%`;

});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});
