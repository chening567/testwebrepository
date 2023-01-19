let portrait = window.matchMedia("(orientation: portrait)")

portrait.addEventListener("change", function() { 
    if (portrait.matches){ 
        function alertUser() { 
            alert("This website is best viewed in Landscape mode");
        }
        setTimeout(alertUser, 50)
    }
})



let inputForm = ['Name', 'ContactNumber', 'Email', 'Issue'];

let button = document.getElementById("submitButton"); 

button.addEventListener("click", function (){ 
    for(let i = 1; i<inputForm.length + 1; i++) { 
        inputForm[i-1] = document.getElementById(String("forminput" + i )).value
    }
    console.log(inputForm);
})

