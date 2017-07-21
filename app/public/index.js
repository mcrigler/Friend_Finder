Survey.Survey.cssType = "bootstrap";
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

window.survey = new Survey.Model({questions: [{type:"text",name:"Name",title:"What is your name"},{type:"text",name:"photo", title:"Add a link to your photo"},
{ type: "matrix", name: "Quality", title: "Please indicate if you agree or disagree with the following statements",
   columns: [{ value: 1, text: "Strongly Disagree" }, 
              { value: 2, text: "Disagree" }, 
              { value: 3, text: "Neutral" }, 
              { value: 4, text: "Agree" }, 
              { value: 5, text: "Strongly Agree" }],
    rows: [{ value: "Q1", text: "The best candidate would be an fresh face and not currently well known" }, 
           { value: "Q2", text: "With the right candidate, America is ready for a woman president" },
           { value: "Q3", text: "Political experience is a necessary job requirement" }, 
           { value: "Q4", text: "Good name recognition is important" }, 
           { value: "Q5", text: "The candidate should be an strong advocate for change" }, 
           { value: "Q6", text: "The candidate should focus on the Democratic base" }, 
           { value: "Q7", text: "The candidate should have broad appeal to Independants and moderate Republicans." }, 
           { value: "Q8", text: "The number one priority should be restoring the middle class" }, 
           { value: "Q9", text: "The number one priority should be healthcare" }, 
           { value: "Q10", text: "A blue collar background is better than an ivy league education" }]}
]});
survey.onComplete.add(function(result) {
  var stuff = result.data
  console.log("Your results are " + stuff.Quality.Q1)
  
	document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
});


$("#surveyElement").Survey({model:survey});