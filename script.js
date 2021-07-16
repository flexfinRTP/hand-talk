//asl form onSumbit
// function onSubmit() 
// {
//     document.getElementById("aslForm").submit();
// }

//submit user input into array for display of correct letter and image
let x = 0;
const array = Array();

function addArray() {
  array[x] = document.getElementById("aslInput").value; //sets user value to array[x]
  alert(`Element: ${array[x]} Added at index ${x}`); //throws alert succesful
  x++; //push user value to end of array
  document.getElementById("aslInput").value = "";
}



//create hand signal img array
let myImage = document.getElementById("mainImage");
//imgarray a-z index = 0-25
const imgArray = ["img/a.jpg","img/b.jpg","img/c.jpg","img/d.jpg","img/e.jpg","img/f.jpg","img/g.jpg","img/h.jpg","img/i.jpg","img/j.jpg","img/k.jpg",
  "img/l.jpg","img/m.jpg","img/n.jpg","img/o.jpg","img/p.jpg","img/q.jpg","img/r.jpg","img/s.jpg","img/t.jpg","img/u.jpg","img/v.jpg","img/x.jpg","img/y.jpg","img/z.jpg"];
console.log(imgArray);

function displaySubmitArray() {
  let e = "";   //default creates line for styling

  for (let y = 0; y < array.length; y++) //y = create array, y = index
  {
    // array[y] = imgArray[y];
    e += `${array[y]}`; //push text, index # and user word to display
    // e += `${imgArray[y]}` //push img
  }
  document.getElementById("Result").innerHTML = e; //set Result div to display user word and split into array
}


//create alphabet array
const alphaDict = Array.from(Array(26)).map((e, i) => i + 65); //declare array, fill with int(charCode from string), up to 26(letters)
const alphabet = alphaDict.map((x) => String.fromCharCode(x)); //map func, change all # of every element in alphaDict to String and save into alphabet
console.log(alphabet);



let imgIndex = 0;

function imgMatch(e) {
  let img = array[i]; // match img[i] to letter in array

  for (let i = 0; i < imgArray.length; i++) {
    if (imgArray[i] == array[i]) {
      if (i === document.getElementById(e)) {
        myImage.setAttribute("src", imgArray[imgIndex]);
        imageIndex = imageIndex % imageArray.length;
    }
  }
}
// let alphabet[0] = <img "img/a.jpg" alt="a">
//alphabet = "B" = <img src="" alt="">
//alphabet = "C" = <img src="" alt="">
//alphabet = "D" = <img src="" alt="">
//alphabet = "E" = <img src="" alt="">
//alphabet = "F" = <img src="" alt="">
//alphabet = "G" = <img src="" alt="">
//alphabet = "H" = <img src="" alt="">
//alphabet = "I" = <img src="" alt="">
//alphabet = "J" = <img src="" alt="">
//alphabet = "K" = <img src="" alt="">
//alphabet = "L" = <img src="" alt="">
//alphabet = "M" = <img src="" alt="">
//alphabet = "N" = <img src="" alt="">
//alphabet = "O" = <img src="" alt="">
//alphabet = "P" = <img src="" alt="">
//alphabet = "Q" = <img src="" alt="">
//alphabet = "R" = <img src="" alt="">
//alphabet = "S" = <img src="" alt="">
//alphabet = "T" = <img src="" alt="">
//alphabet = "U" = <img src="" alt="">
//alphabet = "V" = <img src="" alt="">
//alphabet = "X" = <img src="" alt="">
//alphabet = "Y" = <img src="" alt="">
//alphabet = "Z" = <img src="" alt="">
}


//search youtube api for videos of user input word or phrase, search with preface - 'learn asl'
//


//function to display list of youtube video search results
