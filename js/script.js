// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"El Clavo",
	"artist":"Prince Royce",
	"youtube-url":"https://www.youtube.com/watch?v=tJrnILpLw0Q",
	"image-url":"https://img.europapress.es/fotoweb/fotonoticia_20180316140747_640.jpg",
	"Length": "2:25min"
}

var myPlaylist = [
	{
		"title":"King's Dead",
		"artist":"Jay Rock, Kendrick Lamar, Future",
		"youtube-url":"https://www.youtube.com/watch?v=VwAnsAUYnw4",
		"image-url":"https://i.ytimg.com/vi/XspsXul710U/maxresdefault.jpg",
		"length": "4:23"
		
	},
	{
		"title":"God's Plan",
		"artist":"Drake",
		"youtube-url":"https://www.youtube.com/watch?v=xpVfcZ0ZcFM",
		"image-url":"https://i.ytimg.com/vi/IbVC2jLOSsc/maxresdefault.jpg",
		"length": "5:56"
		
	},
	{
		"title":"Love.",
		"artist":"Kendrick Lamar Ft. Zacari",
		"youtube-url":"https://www.youtube.com/watch?v=ox7RsX1Ee34",
		"image-url":"https://img-fanburst.freetls.fastly.net/NZ5PEsTBXVbDfWuyK8aV1JAL6yA=/400x400/cx2.fanburst.com/artwork/3bc0b691-ac24-42f1-b708-a2adad2989fe.png"
			
		
	},
	{
		"title":"Finesse",
		"artist":"Bruno Mars, Cardi B",
		"youtube-url":"https://www.youtube.com/watch?v=LsoLEjrDogU",
		"image-url": "https://thegrio.com/wp-content/uploads/2018/01/cardi-b-bruno-mars-e1515076782258.jpg",
		"length": "3:43"
	},
	{
		"title":"SAD!",
		"artist":"xxxtentacion",
		"youtube-url":"https://www.youtube.com/watch?v=pgN-vvVVxMA",
		"image-url": "https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2F088c59a5eef050039cb3a46b0ac019c9.1000x1000x1.jpg",
		"length": "2:46"
	}
	
	
]




// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	displayList() 
	


  


	



});

function displayList(){ 
for (var i=0; i< myPlaylist.length; i++){
var song = myPlaylist[i];
$(".songs").append("<h2>"+ song.title+ "</h2>");
$(".songs").append("<h2>"+ song.artist + "</h2>");
$(".songs").append("<img height=400 width=550 src='"+ song["image-url"] + "'/>");
}
}


function clearList(){
 
  
  
}

function addSong(){
 
  
  
}
