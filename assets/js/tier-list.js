const scoreCategories = ["Construction", "Soup", "Meat", "Overall Experience"]
const scoreBreakdown = {
	"Dumpling House": [8, 9, 8, 9],
	"Dumpling Cafe": [10, 10, 8, 9.5],
	"Taiwan Cafe": [7, 8, 7, 8]
}

document.addEventListener("DOMContentLoaded", function(event) { 
	populateAverages()
});

function populateAverages() {
	for (const [restaurant, scores] of Object.entries(scoreBreakdown)) {
		let totalScore = 0
		let maxScore = 0
		for(let i=0; i<scores.length; i++){
			let category = scoreCategories[i]
			let score = scores[i]
			totalScore += score
			maxScore += 10
		}
		let average = Math.floor(totalScore*100/maxScore)/10
		let scoreP = restaurant+' Score'
		console.log(scoreP)
		let ele = document.getElementById(scoreP)
		console.log(ele)

		ele.innerHTML = average
	}
}

function openScoreModal(restaurant) {
	let scoreModalEle = document.getElementById("scoreModal")
	let scoreModal = new bootstrap.Modal(document.getElementById("scoreModal"))
	scores = scoreBreakdown[restaurant]

	let modalBody = scoreModalEle.querySelector('.modal-body')
	modalBody.innerHTML = ""

	let totalScore = 0
	let maxScore = 0

	for(let i=0; i<scores.length; i++){
		let category = scoreCategories[i]
		let score = scores[i]
		totalScore += score
		maxScore += 10
		let rowCode = "<div class=\"row\">"+
							"<div class=\"col-md-5 offset-md-2\">"+
                            "<label for=\""+category+"-score\" class=\"col-form-label\">"+category+":</label>"+
                            "</div>" +
                            "<div class=\"col-md-2\">"+
                            "<span class=\"form-control\" id=\""+category+"-score\">"+score+"</span>"+
                          	"</div>"+
                          "</div>"
        modalBody.innerHTML += rowCode
	}
	let rowCode = "<div class=\"row\">"+
							"<div class=\"col-md-5 offset-md-2\">"+
                            "<label for=\"total-score\" class=\"col-form-label\">Total:</label>"+
                            "</div>" +
                            "<div class=\"col-md-2\">"+
                            "<span class=\"form-control\" id=\"total-score\">"+totalScore+"</span>"+
                          	"</div>"+
                          	"<div class=\"col-md-2 position-relative\";>"+
                            "<span style='font-weight:bold;' class='position-absolute top-50 translate-middle'>/"+maxScore+"</span>"+
                          	"</div>"+
                          "</div>"
    modalBody.innerHTML += rowCode
	let modalTitle = scoreModalEle.querySelector('.modal-title')
	modalTitle.textContent = restaurant + " Score Breakdown"
	

	scoreModal.show()
}