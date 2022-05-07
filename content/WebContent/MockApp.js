/**
 * 
 */

var intrOptionB = [
                   {"text" : "Bend over and take my"},
                   {"text" : "Come a little closer and lick my"},
                   {"text" : "Eat shit and die you"},
                   {"text" : "I expected more from a"},
                   {"text" : "I thought I smelled a"},
                   {"text" : "Come a little closer and see for yourself you"},
                   {"text" : "What a tasty"},
                   {"text" : "How did you become such a"},
                   {"text" : "I've had open sores better looking than your face you"}
              	];

var adjA = [
			{"text": "artless"},
			{"text": "arrogant"},
			{"text": "bitch-faced"},
			{"text": "catotonic"},
			{"text": "compulsive"},
			{"text": "cowardly"},
			{"text": "creepy"},
			{"text": "daft"},
			{"text": "delusional"},
			{"text": "demented"},
			{"text": "dicknose"},
			{"text": "emotional"},
			{"text": "filth-ridden"},
			{"text": "flabby"},
			{"text": "flacid"},
			{"text": "flattulent"},
			{"text": "frothy"},
			{"text": "good for nothing"},
			{"text": "half-assed"},
			{"text": "half-dead"},
			{"text": "hedonistic"},
			{"text": "hystrionic"},
			{"text": "idiotic"},
			{"text": "ignorant"},
			{"text": "incompetent"},
			{"text": "incontinent"},
			{"text": "infectious"},
			{"text": "insecure"},
			{"text": "Jizz-faced"},
			{"text": "lazy"},
			{"text": "limp"},
			{"text": "limp-wristed"},
			{"text": "mangy"},
			{"text": "massive "},
			{"text": "mewling"},
			{"text": "mindless"},
			{"text": "mutilated"},
			{"text": "narsisistic"},
			{"text": "nightmare"},
			{"text": "obsessive"},
			{"text": "pathetic"},
			{"text": "pompous"},
			{"text": "pox-faced"},
			{"text": "promiscuious"},
			{"text": "red-faced"},
			{"text": "repulsive"},
			{"text": "shrivled"},
			{"text": "slimy"},
			{"text": "sloppy"},
			{"text": "slutty"},
			{"text": "smelly"},
			{"text": "sniveling"},
			{"text": "stinking"},
			{"text": "stupid"},
			{"text": "stupid"},
			{"text": "syphillitic"},
			{"text": "tight-holed"},
			{"text": "toothless"},
			{"text": "ugly"},
			{"text": "unkempt"},
			{"text": "unwashed"},
			{"text": "up-tight"},
			{"text": "useless"},
			{"text": "vacant"},
			{"text": "vagrant"},
			{"text": "vapid"},
			{"text": "worthless"},
			{"text": "cheese wad"},
			];

var nounA = [{"text": "boner", "tag": ["private"]},
             {"text": "ass", "tag": ["body"]},
             {"text": "waffle", "tag": ["food"]},
             {"text": "hand-cougher", "tag": ["selfWorth", "body", "intellegence"]},
             {"text": "ass"},
             {"text": "ass-fister"},
             {"text": "ass-sucker"},
             {"text": "ass-wipe"},
             {"text": "banshee"},
             {"text": "biscuit"},
             {"text": "bitch"},
             {"text": "boner"},
             {"text": "boner-shrinker"},
             {"text": "boot-licker"},
             {"text": "breeder"},
             {"text": "tart"},
             {"text": "butt"},
             {"text": "butt-plug"},
             {"text": "clown"},
             {"text": "lollipop"},
             {"text": "cock"},
             {"text": "cretin"},
             {"text": "cripple"},
             {"text": "crotch"},
             {"text": "cunt"},
             {"text": "dick"},
             {"text": "douche"},
             {"text": "failure"},
             {"text": "muffin"},
             {"text": "freak"},
             {"text": "fritter"},
             {"text": "fuckhead"},
             {"text": "fucktard"},
             {"text": "goblin"},
             {"text": "hag"},
             {"text": "cookie"},
             {"text": "pony"},
             {"text": "hand-cougher"},
             {"text": "has-been"},
             {"text": "donut"},
             {"text": "jizz"},
             {"text": "maniac"},
             {"text": "meat-curtains"},
             {"text": "micro-penis"},
             {"text": "mime"},
             {"text": "monster"},
             {"text": "moron"},
             {"text": "nightmare"},
             {"text": "nut"},
             {"text": "parasite"},
             {"text": "piece of shit"},
             {"text": "pirate"},
             {"text": "prick"},
             {"text": "queen"},
             {"text": "rectum"},
             {"text": "shart"},
             {"text": "shit"},
             {"text": "shithead"},
             {"text": "slut"},
             {"text": "spaz"},
             {"text": "sphincter"},
             {"text": "taint"},
             {"text": "titty-fucker"},
             {"text": "toad"},
             {"text": "turd"},
             {"text": "twat"},
             {"text": "waffle"},
             {"text": "wanker"},
             {"text": "weasle"},
             {"text": "whore"},
             {"text": "yoghurt cock"},
             {"text": "sponge"}
             ];

function populateIntros(){
	var select = document.getElementById('introB');
	
	//Prevent adding intros that have already been added
	if(select.firstElementChild != null){
		return;
	}
	
	for (var i = 0; i < intrOptionB.length; i++){
		var optn = intrOptionB[i];
		var el = document.createElement("option");
		el.textContent = optn.text;
		el.value = optn.text;
		select.appendChild(el);
	}
}

function displayMock(){
	selectElement = document.querySelector('#introB');
	var output = selectElement.value;
	var firstPhrase = randomTextElement(adjA);
	var secondPhrase = randomTextElement(nounA);
	output += " " + firstPhrase + " " + secondPhrase;
	document.querySelector('.output').textContent = output;
}

function randomTextElement(array){
	var max = array.length;
	var index = Math.floor(Math.random() * max);
	console.log(index);
	return array[index].text;
}
