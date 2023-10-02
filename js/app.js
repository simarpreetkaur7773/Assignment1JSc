let nouns = ["the turkey", "Mom", "Dad", "The Dog", "My Teacher", "The elephant", "The Cat"];
let verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
let adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let nounsTwo = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

let myMain = document.querySelector("#main");
let randomStory = document.querySelector("#randomStory");
let resetButton = document.querySelector("#resetButton");
let display = document.querySelector("#display");
let i = 0, j = 0, k = 0, l = 0, m = 0;
let storedNoun ="", storedVerb="", storedAdjective="", storedNounTwo="", storedSettings="";
let mySentence = "";
const displayButton = document.querySelector('#button');

function getRandomNumber(myList) {
	return myList[Math.floor(Math.random() * myList.length)];
  }

function removeColor(newIndex,myList,listNumber)
{
	const myUl = document.querySelector(`ul:nth-of-type(${listNumber})`);
    const myLi = myUl.querySelector(`li:nth-of-type(${newIndex + 1})`);
	for (let myIndex = 0; myIndex < myList.length; myIndex++) {
		let newLi = myUl.querySelector(`li:nth-of-type(${myIndex + 1})`);
		newLi.style.backgroundColor = "";
	  }
  
	  myLi.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
}

function orderOfItems()
{
	let myArray = mySentence.split(' ');
	myArray.forEach(element => {
		if(nouns.includes(element))
		{
			storedNoun = element;
		}
		else if(verbs)
		{
			store
		}
	});
}

displayButton.addEventListener('click', function () {
	display.textContent = storedNoun + " " + storedVerb + " " + storedAdjective + " " + storedNounTwo + " " + storedSettings;
});


function createList(items) {
	let list = document.createElement("ul");
	for (let i = 0; i < items.length; i++) {
	  let listItem = document.createElement("li");
	  let div = document.createElement("div");
	  let img = document.createElement("img");
	  img.src ="images/"+ items[i].toLowerCase()+".png";
	  
	  let p = document.createElement("p");
	  p.textContent = items[i];
	  
	  div.appendChild(img);
	  div.appendChild(p);
	
	  listItem.appendChild(div);
	  list.appendChild(listItem);
	}
	
	myMain.appendChild(list);
  }
  
  
  
  createList(nouns);
  createList(verbs);
  createList(adjectives);
  createList(nounsTwo);
  createList(settings);
  

  let nounButton = document.querySelector("#noun").addEventListener('click', function () {
	
	if(i===nouns.length) {
		i = 0;
	  }
	if (i < nouns.length) {
		storedNoun = nouns[i];
		mySentence =+storedNoun+ " ";
		removeColor(i,nouns,1);
	}
	i++;
  });
  

  let adjectiveButton = document.querySelector("#adjective").addEventListener('click', function () {
	if (j === adjectives.length) {
	  j = 0;
	}
	if (j < adjectives.length) {
	  storedAdjective = adjectives[j];
	  mySentence =+storedAdjective+ " ";
	  removeColor(j, adjectives, 3);
	}
	j++;
  });
  
  let verbButton = document.querySelector("#verb").addEventListener('click', function () {
	if (k === verbs.length) {
	  k = 0;
	}
	if (k < verbs.length) {
	  storedVerb = verbs[k];
	  mySentence =+storedVerb+ " ";
	  removeColor(k, verbs, 2);
	}
	k++;
  });
  
  let nounButtonTwo = document.querySelector("#nounstwo").addEventListener('click', function () {
	if (l === nounsTwo.length) {
	  l = 0;
	}
	if (l < nounsTwo.length) {
	  storedNounTwo = nounsTwo[l];
	  mySentence =+storedNounTwo+ " ";
	  removeColor(l, nounsTwo, 4);
	}
	l++;
  });
  
  let settingButton = document.querySelector("#settings").addEventListener('click', function () {
	if (m === settings.length) {
	  m = 0;
	}
	if (m < settings.length) {
	  storedSettings = settings[m];
	  mySentence =+storedSettings+ " ";
	  removeColor(m, settings, 5);
	}
	m++;
  });

randomStory.addEventListener('click',function () {
	let myVar = getRandomNumber(nouns)+ " " +
	getRandomNumber(verbs) + " " +
	getRandomNumber(adjectives) + " " +
	getRandomNumber(nounsTwo) + " " +
	getRandomNumber(settings);
  display.textContent = myVar;
})

resetButton.addEventListener('click', function (){
	i = 0,j = 0,k = 0,l = 0,m = 0;
  
	let reset = document.querySelectorAll('li');
	reset.forEach(function (element) {
	  element.style.backgroundColor = "";
	});
	storedNoun ="", storedVerb="", storedAdjective="", storedNounTwo="", storedSettings="";
	display.textContent = "";
})