//asl form onSumbit
// function onSubmit() 
// {
//     document.getElementById("aslForm").submit();
// }

//submit user input into array for display of correct letter and image
let x = 0;
const array = Array();

function addArray()
{
    array[x] = document.getElementById("aslInput").value; //sets user value to array[x]
    alert(`Element: ${array[x]} Added at index ${x}`); //throws alert succesful
    x++; //push user value to end of array
    document.getElementById("aslInput").value = "";
}

function displaySubmitArray()
{
   let e = "";   //default creates line for styling

   for (let y = 0; y < array.length; y++) //y = create array, y = index
   {
     e += `${array[y]}`; //push text, index # and user word to display
   }
   document.getElementById("Result").innerHTML = e; //set Result div to display user word and split into array
}


//create alphabet array
const alphaDict = Array.from(Array(26)).map((e, i) => i + 65); //declare array, fill with int(charCode from string), up to 26(letters)
const alphabet = alphaDict.map((x) => String.fromCharCode(x)); //map func, change all # of every element in alphaDict to String and save into alphabet
console.log(alphabet);


//create hand signal img array
//
// function imgMatch()
// {
//     //alphabet = "A" = <img src="" alt="">
        //alphabet = "B" = <img src="" alt="">
// }


//search youtube api for videos of user input word or phrase, search with preface - 'learn asl'
//


//function to display list of youtube video search results
//