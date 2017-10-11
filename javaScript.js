//_______________User Name______________________________________________________________________________________________________
function userName(){
	var userName = prompt("Please write your name");
if (userName == null || userName == "" || userName.match(/[0-9]/) || userName.match(/[a-z]{10,200}/)) {
	alert("First and last name must be filled out and not be a number!");
	location.reload(true);
}else if (userName) {
    document.getElementById('userName').innerHTML = userName;
   
 }
}
//_______________Buttons , questions, answers______________________________________________________________________________________________________
var questions = {

	q1:"Правда ли, что планета Меркурий ближе всех остальных к Солнцу, чем все остальные?",
	q2:"Правда ли, что гепард быстрейший из всех наземных млекопитающих?",
	q3:"Правда ли что, человеческое тело состоит на 20% из воды?",
	q4:"Правда ли, что возраст дерева можно узнать по его высоте?",
    q5:"Правда ли, что папоротники одни из древнейших растений?",
	q6:"Правда ли, что тихий океан является самым маленьким океаном планеты?",
	q7:"Правда ли, что птица колибри способна развивать до 80 км/ч?",
	q8:"Правда ли, что человеческий скелет состоит из более 200 костей?",
	q9:"Правда ли, что крокодилы меняют цвет кожи, если чувствуют опасность?",
	q10:"Правда ли, что зубы у акулы регулярно сменяются?",

}
var img = document.getElementById("img");
var btn1 = document.getElementsByClassName('btn')[0];
var btn2 = document.getElementsByClassName('btn')[1];
var compCount = 0;
var userCount = 0;
var audio = document.getElementById("audio");
var divContainer = document.getElementsByClassName("container")[0];
var source = document.getElementById("video");



btn1.addEventListener("click",function(){
	if ( question.innerHTML == questions.q1) {
       ++compCount;
       question.innerHTML = questions.q2;
	}else if ( question.innerHTML == questions.q2) {
        userCount++;
         question.innerHTML = questions.q3;
	}else if ( question.innerHTML == questions.q3) {
        compCount++;
         question.innerHTML = questions.q4;
	}else if ( question.innerHTML == questions.q4) {
        compCount++;
         question.innerHTML = questions.q5;
	}else if ( question.innerHTML == questions.q5) {
        userCount++;
         question.innerHTML = questions.q6;
	}else if ( question.innerHTML == questions.q6) {
        compCount++;
         question.innerHTML = questions.q7;
	}else if ( question.innerHTML == questions.q7) {
        userCount++;
         question.innerHTML = questions.q8;
	}else if ( question.innerHTML == questions.q8) {
        userCount++;
         question.innerHTML = questions.q9;
	}else if ( question.innerHTML == questions.q9) {
        compCount++;
         question.innerHTML = questions.q10;
     }else if (question.innerHTML == questions.q10) {
         userCount++;
          btn1.disabled = "true";
          btn2.disabled = "true";
           if (userCount>compCount || compCount >userCount || userCount == compCount) {
        	 for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
    document.getElementsByClassName("timer")[0].innerHTML = "";
        divContainer.style.display = "none";
        }
         if (userCount > compCount) {
         	audio.setAttribute("src","Audio/muzyka-iz-igr-hitman-absolution.mp3");
            source.setAttribute("src","https://ak4.picdn.net/shutterstock/videos/2925334/preview/stock-footage-happy-new-year-different-animation-series-version-from-to-built-in-flash-red-and-blu.mp4");
         }else if (compCount > userCount) {
            audio.setAttribute("src","Audio/muzyka-iz-igr-gods_title.mp3")
            source.setAttribute("src","https://ak5.picdn.net/shutterstock/videos/12408275/preview/stock-footage-game-over-thank-you-for-playing-light-blue-game-over-thank-you-game-over-text-in-light-blue-colo.mp4");
         }else if (compCount == userCount) {
            audio.setAttribute("src","Audio/muzyka-iz-igr-call-of-duty-world-at-war.mp3");
            source.setAttribute("src","https://static.videezy.com/system/resources/previews/000/005/058/original/Congregate_4K_Motion_Background_Loop.mp4");
         }

     }
     document.getElementById("userCount").innerHTML = userCount;
    document.getElementById("compCount").innerHTML = compCount;
});



btn2.addEventListener("click",function(){
	if ( question.innerHTML == questions.q1) {
       ++userCount;
       question.innerHTML = questions.q2;
	}else if ( question.innerHTML == questions.q2) {
        compCount++;
         question.innerHTML = questions.q3;
	}else if ( question.innerHTML == questions.q3) {
        userCount++;
         question.innerHTML = questions.q4;
	}else if ( question.innerHTML == questions.q4) {
        userCount++;
         question.innerHTML = questions.q5;
	}else if ( question.innerHTML == questions.q5) {
        compCount++;
         question.innerHTML = questions.q6;
	}else if ( question.innerHTML == questions.q6) {
        userCount++;
         question.innerHTML = questions.q7;
	}else if ( question.innerHTML == questions.q7) {
        compCount++;
         question.innerHTML = questions.q8;
	}else if ( question.innerHTML == questions.q8) {
        compCount++;
         question.innerHTML = questions.q9;
	}else if ( question.innerHTML == questions.q9) {
        userCount++;
         question.innerHTML = questions.q10;
     }else if (question.innerHTML == questions.q10) {
         compCount++;
            btn1.disabled = "true";
            btn2.disabled = "true";
        if (userCount>compCount || compCount >userCount || userCount == compCount) {
        	 for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
    document.getElementsByClassName("timer")[0].innerHTML = "";
            divContainer.style.display = "none";
        }
         if (userCount > compCount) {
         	audio.setAttribute("src","Audio/muzyka-iz-igr-hitman-absolution.mp3");
            source.setAttribute("src","https://ak4.picdn.net/shutterstock/videos/2925334/preview/stock-footage-happy-new-year-different-animation-series-version-from-to-built-in-flash-red-and-blu.mp4");
         }else if (compCount > userCount) {
         	audio.setAttribute("src","Audio/muzyka-iz-igr-gods_title.mp3")
            source.setAttribute("src","https://ak5.picdn.net/shutterstock/videos/12408275/preview/stock-footage-game-over-thank-you-for-playing-light-blue-game-over-thank-you-game-over-text-in-light-blue-colo.mp4");
         }else if (compCount == userCount) {
         	audio.setAttribute("src","Audio/muzyka-iz-igr-call-of-duty-world-at-war.mp3");
            source.setAttribute("src","https://static.videezy.com/system/resources/previews/000/005/058/original/Congregate_4K_Motion_Background_Loop.mp4");
            img.setAttribute("src","Pictures/2.jpeg");
            img.style.display = "block";
         }
     }
     document.getElementById("userCount").innerHTML = userCount;
    document.getElementById("compCount").innerHTML = compCount;
});

var question = document.getElementById("question");
var q = questions.q;
var countDown;


document.getElementsByClassName("start")[0].addEventListener("click",function(){
   question.innerHTML = questions.q1;
   document.getElementsByClassName("start")[0].disabled = true;
   
   	return function(){
   //over time
 countDown = new Date().getTime();
//interval
var interval = setInterval(function(){
//now time
var now = new Date().getTime();
//distance
var distance = (countDown + 15000) - now;
//time colculation
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) /  (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60))  /  (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60))  / (1000));
//where ids it shown
document.getElementsByClassName("timer")[0].innerHTML = seconds;
document.getElementsByClassName("timer")[0].style.fontSize = "50px";
//logic
if (distance <= 1) {
	countDown += 15000;
	compCount++;
	 document.getElementById("compCount").innerHTML = compCount;
  }
  },1000);
}()
});


document.getElementsByClassName("restart")[0].addEventListener("click",function(){
  	document.getElementById("userCount").innerHTML = 0;
    document.getElementById("compCount").innerHTML = 0;
   divContainer.style.display = "block";
   userCount = 0;
   compCount = 0;
   img.style.display = "none";
   question.innerHTML = " ";
   btn1.disabled = false;
   btn2.disabled = false;
   document.getElementsByClassName("start")[0].disabled = false;
   for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
    document.getElementsByClassName("timer")[0].innerHTML = "";
    audio.setAttribute("src","Audio/muzyka-iz-igr-kredo-ubiycy-2.mp3");
    source.setAttribute("src","https://static.videezy.com/system/resources/previews/000/004/952/original/Summer_Flower_4K_Living_Background.mp4");
});

document.getElementById("mute").addEventListener("click",function(){
  var mute = document.getElementById('audio');
  if (mute.muted == true){
  	mute.muted = false;
  }else{
  	mute.muted = true;
  }
});