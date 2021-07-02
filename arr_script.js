var play = document.querySelector(".play");
var pause = document.querySelector(".pause");
var songs = ["Ellapugazhum.mp3","Poongatrile.mp3","Narumugaye narumugaye.mp3" ];
var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0;
window.onload = playSong;

function playSong()
{
	document.getElementById("sname").innerHTML = songs[currentSong];
    song.src = songs[currentSong];
    song.play();
}

function playOrPauseSong()
{
	if (song.paused)
	{
		song.play();
	}
	else
	{
		song.pause();
    }
}

song.addEventListener('timeupdate', function(){
    var position = song.currentTime / song.duration;
   	fillBar.style.width = position * 100 + '%';
});

function next()
{
	currentSong++;
    if (currentSong > 2) 
    {
    	currentSong = 0;
    }
    playSong();
}

function pre()
{
	currentSong--;
	if(currentSong < 0)
	{
		currentSong = 2;
	}
	playSong();
}

$(document).ready(function(){
   	$("#pause").click(function(){
        $(".pause").toggleClass("play");
    });
});

