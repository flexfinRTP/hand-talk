gapi.load("client", loadClient);
  
function loadClient() {
    gapi.client.setApiKey("AIzaSyDlhQKimER-FWU2zt74rcqYd3w0ZUYHUgM");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
                function(err) { console.error("Error loading GAPI client for API", err); });
}

const ytForm = document.getElementById('yt-form');
const keywordInput = document.getElementById('keyword-input');
const maxresultInput = document.getElementById('maxresult-input');
const orderInput = document.getElementById('order-input');
const videoList = document.getElementById('videoListContainer');
var pageToken = '';
  
ytForm.addEventListener('submit', e => {
    e.preventDefault();
    execute();
});
  
function paginate(e, obj) {
    e.preventDefault();
    pageToken = obj.getAttribute('data-id');
    execute();
}
  
// Make sure the client is loaded before calling this method.
function execute() {
    const searchString = keywordInput.value;
    const maxresult = maxresultInput.value;
    const orderby = orderInput.value;
  
    var arr_search = {
        "part": 'snippet',
        "type": 'video',
        "order": orderby,
        "maxResults": maxresult,
        "q": searchString
    };
  
    if (pageToken != '') {
        arr_search.pageToken = pageToken;
    }
  
    return gapi.client.youtube.search.list(arr_search)
    .then(function(response) {
        // Handle the results here (response.result has the parsed body).
        const listItems = response.result.items;
        if (listItems) {
            let output = '<h4>Videos</h4><ul>';
  
            listItems.forEach(item => {
                const videoId = item.id.videoId;
                const videoTitle = item.snippet.title;
                output += `
                    <li><a data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><p>${videoTitle}</p></li>
                `;
            });
            output += '</ul>';
  
            if (response.result.prevPageToken) {
                output += `<br><a class="paginate" href="#" data-id="${response.result.prevPageToken}" onclick="paginate(event, this)">Prev</a>`;
            }
  
            if (response.result.nextPageToken) {
                output += `<a href="#" class="paginate" data-id="${response.result.nextPageToken}" onclick="paginate(event, this)">Next</a>`;
            }
  
            // Output list
            videoList.innerHTML = output;
        }
    },
    function(err) { console.error("Execute error", err); });
}


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

function displaySubmitArray() {
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
