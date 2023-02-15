
var datetime = new Date();
console.log(datetime);

function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString('en-us', {weekday:"long", day:"numeric", month:"short", year:"numeric", hour:"numeric", minute:"numeric", second:"numeric"});
  timeDisplay.textContent = dateString;
}
  setInterval(refreshTime, 1000);

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
  }
  
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}



var subjectObject = {
  "Pulmonary Medicine": {
    "Doc 1": ["Day 1 Time 1", "Day 3 Time 2"]
  },
  "Dermatology": {
    "Doc 2": ["Day 2 Time 1", "Day 4 Time 2"]
  },
  "Internal Medicine": {
    "Doc 3": ["Day 3 Time 1", "Day 5 Time 2"]
  },
  "Otorhinolaryngology": {
    "Doc 4": ["Day 4 Time 1", "Day 6 Time 2"]
  },
  "Paediatrics": {
    "Doc 5": ["Day 5 Time 1", "Day 7 Time 3"]
  },
  "Cardiology": {
    "Doc 6": ["Day 6 Time 1", "Day 1 Time 3"]
  },
  "Neurology": {
    "Doc 7": ["Day 7 Time 1", "Day 2 Time 3"]
  },
  "Physical Medicine Rehabilitation": {
    "Doc 8": ["Day 1 Time 2", "Day 3 Time 3"]
  },
  "General Surgery": {
    "Doc 9": ["Day 2 Time 2", "Day 4 Time 3"]
  },
}

function cascadeMenu() {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
  //empty Chapters- and Topics- dropdowns
  chapterSel.length = 1;
  topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
   //empty Chapters dropdown
  chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}

