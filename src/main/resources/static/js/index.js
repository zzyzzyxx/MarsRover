
let userId = getUrlParameter('userId')
if (userId == null || userId == '') {
	userId = localStorage.getItem('userId')
	if (userId == null || userId == '') {
		document.getElementById('createUser').value = true
	} else {
/*			fetch('/savedPreferences?userId='+userId)
		  .then(response => response.json())
		  .then(jsonResponse => console.log(jsonResponse))*/
		window.location.href = '/?userId='+userId
	}
}

if (userId != null && userId != '') {
	localStorage.setItem('userId', userId)
	document.getElementById('userId').value = userId
}

let marsApiButtons = document.querySelectorAll("button[id*='marsApi']")

marsApiButtons.forEach( button => button.addEventListener('click', function () {
									const buttonId = this.id
									const roverId = buttonId.split('marsApi')[1]
									let apiData = document.getElementById('marsApiRoverData')
									apiData.value = roverId
									document.getElementById('frmRoverType').submit()
								  }))

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

      function toggleHoverWindow() {
        var x = document.getElementById("hover-window");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }}

let marsRoverType = document.getElementById('marsApiRoverData').value
		
highlightBtnByRoverType(marsRoverType)

let marsSol = document.getElementById('marsSol').value
if (marsSol != null && marsSol != '' && marsSol >= 0) {
	document.getElementById('marsSol').value = marsSol
}

function highlightBtnByRoverType (roverType) {
	/*if (roverType == '') 
		roverType = 'Opportunity' */
	
	document.getElementById('marsApi'+roverType).classList.remove('btn-secondary')
	document.getElementById('marsApi'+roverType).classList.add('btn-primary')
}
// added code
function changeLanguageToPolish() {
  // Change text content
  document.getElementById("welcome").textContent = "Witaj w <b>Mars Rover API</b>";
  document.getElementById("createdBy").textContent = "przez Sebastiana Wróbla (2022)";
  document.getElementById("consultation").textContent = "na konsultacji Trevor Page'a (<a th:href=\"@{http://www.CodersCampus.com}\" target=\"blank\">CodersCampus.com</a>)";
  
  // Change button text
  document.getElementById("languageButton").textContent = "ENGLISH";
  document.getElementById("languageButton").onclick = changeLanguageToEnglish;
}

function changeLanguageToEnglish() {
  // Change text content
  document.getElementById("welcome").textContent = "Welcome to the <b>Mars Rover API</b>";
  document.getElementById("createdBy").textContent = "by Sebastian Wrobel (2022)";
  document.getElementById("consultation").textContent = "upon Trevor Page's (<a th:href=\"@{http://www.CodersCampus.com}\" target=\"blank\">CodersCampus.com</a>) consultation.";

  // Change button text
  document.getElementById("languageButton").textContent = "POLISH";
  document.getElementById("languageButton").onclick = changeLanguageToPolish;
}
