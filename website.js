
  //create variable with current date
  let year = new Date();

  //get current year
  let current = year.getFullYear();

  //variable that will put info into the tag
  let text = document.getElementById("copyright");
  text.style.fontSize = "18px";
  text.style.textAlign = "right";
  text.innerHTML = "&copy; " + current + " Piece of Cake ";

  //function to change color by reviews (override CSS)
  function changeColor(change){
    change.style.color = "#333333";
    change.style.backgroundColor = "white";
  }

  //function to reset the color by reviews
  function resetColor(change){
    change.style.color = "white";
    change.style.backgroundColor = "#333333";
  }

  //function to make a border by the grid with the four main pages(folders)
  function borderColor(outline){
    outline.style.borderColor = "#333333";
    outline.style.borderWidth = "10px";
    outline.style.borderStyle = "solid";
    outline.style.padding = "10px";
  }

  //function to reset by the grid with the four main pages(folders)
  function resetBorder(outline){
    outline.style.border = "none";
    outline.style.padding = "15px";
  }

  //function to change color on the "main" navigation bar in home page (override CSS)
  function mainPage(swap){
    swap.style.textDecoration = "underline";
    swap.style.fontWeight = "bold";
    swap.style.color = "#660000";
  } 

  //function to change color on the "appetizers" navigation bar in home page (override CSS)
  function appetizersPage(swap){
    swap.style.textDecoration = "underline";
    swap.style.fontWeight = "bold";
    swap.style.color = "navy";
  } 

  //function to change color on the "sides" navigation bar in home page (override CSS)
  function sidesPage(swap){
    swap.style.textDecoration = "underline";
    swap.style.fontWeight = "bold";
    swap.style.color = "#2c4c3b";
  } 

  //function to change color on the "desserts" navigation bar in home page (override CSS)
  function dessertsPage(swap){
    swap.style.textDecoration = "underline";
    swap.style.fontWeight = "bold";
    swap.style.color = "#522081";
  } 

  //function to reset the navigation bar in home page
  function fixPage(swap){
    swap.style.color = "#333333";
    swap.style.textDecoration = "none";
    swap.style.fontWeight = "normal";
  }

  //function for submit button when clicked
  function formSubmit(event , form){
    event.preventDefault();

    //if user filled out form there will be a windows alert
    if (form.checkValidity()){
      window.alert("Thanks for taking the time to share your feedback! Your insights are super valuable and help us get even better!");

    //submit form after window alert
    form.submit();
    }

    //if required fields not filled out then will display instructions for user
    else{
      let response = document.getElementById("submit");
      response.style.color= "#333333";
      response.style.fontSize = "13px";
      response.innerHTML = "Please fill out the required fields to submit your review.";

      //instruction for user will be displayed for two seconds while timer runs
      setTimeout( function(){
        response.innerHTML= ""}
      ,3000);
    }
  }

  //function for cancel button when clicked that will display text for user
  function formCancel(event){
    event.preventDefault();
    let stop = document.getElementById("cancel");
    stop.style.color= "#333333";
    stop.style.fontSize = "13px";
    stop.style.textAlign = "center";
    stop.innerHTML = "We would love to hear from you!"

    //text for user will be displayed for two seconds while timer runs
    setTimeout( function(){
      stop.innerHTML= ""}
    ,2000);
  }


  //function to change color and underline by the main page header "tabs" (override CSS)
  function mainTag(col){
    col.style.color = "#660000";
    col.style.backgroundColor = "whitesmoke";
    col.style.borderWidth = "15px";
    col.style.borderColor = "whitesmoke";
    col.style.textDecoration = "underline";
  }

  //function to change color and underline by the appetizer page header "tabs" (override CSS)
  function appTag(col){
    col.style.color = "navy";
    col.style.backgroundColor = "whitesmoke";
    col.style.borderWidth = "15px";
    col.style.borderColor = "whitesmoke";
    col.style.textDecoration = "underline";
  }

  //function to change color and underline by the sides page header "tabs" (override CSS)
  function sidTag(col){
    col.style.color =  "#2c4c3b";
    col.style.backgroundColor = "whitesmoke";
    col.style.borderWidth = "15px";
    col.style.borderColor = "whitesmoke";
    col.style.textDecoration = "underline";
  }

  //function to change color and underline by the desserts page header "tabs" (override CSS)
  function desTag(col){
    col.style.color = "#522081";
    col.style.backgroundColor = "whitesmoke";
    col.style.borderWidth = "15px";
    col.style.borderColor = "whitesmoke";
    col.style.textDecoration = "underline";
  }

  //function to reset the main page header "tabs"
  function fixMain(col){
    col.style.color = "whitesmoke";
    col.style.backgroundColor = "#660000";
    col.style.borderWidth = "15px";
    col.style.borderColor = "#660000";
    col.style.textDecoration = "none";
  }

  //function to reset the appetizer page header "tabs"
  function fixApp(col){
    col.style.color = "whitesmoke";
    col.style.backgroundColor = "navy";
    col.style.borderWidth = "15px";
    col.style.borderColor = "navy";
    col.style.textDecoration = "none";
  }

  //function to reset the sides page header "tabs"
  function fixSid(col){
    col.style.color = "whitesmoke";
    col.style.backgroundColor = "#2c4c3b";
    col.style.borderWidth = "15px";
    col.style.borderColor = "#2c4c3b";
    col.style.textDecoration = "none";
  }

  //function to reset the desserts page header "tabs"
  function fixDes(col){
    col.style.color = "whitesmoke";
    col.style.backgroundColor = "#522081";
    col.style.borderWidth = "15px";
    col.style.borderColor = "#522081";
    col.style.textDecoration = "none";
  }

  //function that will create a node: p tag in the home page introduction paragraph
  function makeNode(){
    let ptag = document.createElement("p");
    ptag.innerHTML = "it's a Piece of Cake";
    ptag.style.fontSize = "20px";
    ptag.style.textAlign = "left";
    ptag.style.fontWeight = "bold";

    //if there is a p tag inside (node created) do not put another
    if (!node.querySelector("p")){
      node.insertBefore(ptag, null);
    }
  }