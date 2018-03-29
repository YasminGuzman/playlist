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

var myPlayList = [
	{
		"title":"King's Dead",
		"artist":"Jay Rock, Kendrick Lamar, Future",
		"youtube-url":"https://www.youtube.com/watch?v=VwAnsAUYnw4",
		"image-url":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi9t--DxpHaAhVL64MKHdPxBzUQjRx6BAgAEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXspsXul710U&psig=AOvVaw1RJkQ9-Sv7uSSQeKRFMhfH&ust=1522413380905937",
		"length": "4:23"
		
	},
	{
		"title":"God's Plan",
		"artist":"Drake",
		"youtube-url":"https://www.youtube.com/watch?v=xpVfcZ0ZcFM",
		"image-url":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj1x8mbxpHaAhWXw4MKHXJwBUUQjRx6BAgAEAU&url=https%3A%2F%2Fgenius.com%2FDrake-gods-plan-lyrics&psig=AOvVaw3lv5_6ThHInayc8nyg8U9s&ust=1522413451135985",
		"length": "5:56"
		
	},
	{
		"title":"Love.",
		"artist":"Kendrick Lamar Ft. Zacari",
		"youtube-url":"https://www.youtube.com/watch?v=ox7RsX1Ee34",
		"image-url":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjuts_axZHaAhWOxIMKHXXuDgAQjRx6BAgAEAU&url=https%3A%2F%2Fwww.versuri-lyrics.info%2Flove-kendrick-lamar-feat-zacari-lyrics%2F&psig=AOvVaw38INWSSO9PZm-AxODBuxVV&ust=1522413231053616"
		length: 	
		
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
  $(".songs").append(mySong.title);
  






});

function displayList(){

  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
