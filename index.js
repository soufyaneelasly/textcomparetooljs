const darkModeToggle = document.getElementById('darkmode-toggle');
darkModeToggle.addEventListener('change', () => {
   
    if (darkModeToggle.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});


function findDifferences(text1, text2) {
    var differences = [];
    for (var i = 0; i < text1.length; i++) {
        if (text1[i] !== text2[i]) {
            differences.push("Char" + (i + 1) + ": '" + text1[i] + "' vs '" + text2[i] + "'");
        }
    }
    return differences;
}
 
function compareText() {


var text1 = document.getElementById('field1').value;
var text2 = document.getElementById('field2').value;

     
    var matchElement = document.getElementById('match');
    var difference1Element = document.getElementById('difference1');
    difference1Element.textContent="Defference:"


    if (text1===text2){

        console.log("yaap")

        matchElement.style.backgroundColor ="#3a863a";
        
        difference1Element.style.backgroundColor ="#3c4444";

        


        
    }else{

        console.log("noo")
       
        matchElement.style.backgroundColor ="#3c4444";
        difference1Element.style.backgroundColor ="#3a863a";
        var differences = findDifferences(text1, text2);
        difference1Element.textContent = differences.join("| ")

    }

}
 
function clr(){
    console.log("f")
    document.getElementById('field1').value = '';
    document.getElementById('field2').value = '';
    compareText()

}
function switsher(){
    let x=document.getElementById('field1').value
    let y=document.getElementById('field2').value
    document.getElementById('field1').value=y
    document.getElementById('field2').value=x



}