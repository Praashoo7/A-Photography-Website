/*---------------------------------------------------------------------- LOADING_TEXT_START ----------------------------------------------------------------------*/

function getRandomItem(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);
  
  // get random item
  const item = arr[randomIndex];
  
  return item;
  }
  
  let titles = ["Generating witty dialog...",
    "Don't think of purple hippos...",
    "No this is not a Bit Flip.",
    "The bits are breeding",
    "...and enjoy the elevator music...",
    "Don't worry - a few bits tried to escape, but we caught them",
    "...at least you're not on hold...",
    "Why don't you order a sandwich?",
    "While the satellite moves into position",
    "The bits are flowing slowly today",
    "Have you lost weight?",
    "It's not you. It's me.",
    "All your web browser are belong to us",
    "You know this depends on your internet speed, right?",
    "All I really need is a kilobit.",
    "I feel like im supposed to be loading something. . .",
    "What do you call 8 Hobbits? A Hobbyte.",
    "Should have used a compiled language...",
    "Is this Windows?",
    "Adjusting flux capacitor...",
    "Please wait until the sloth starts moving.",
    "Don't break your screen yet!",
    "I swear it's almost done.",
    "Let's take a mindfulness minute...",
    "Unicorns are at the end of this road, I promise.",
    "Keeping all the 1's and removing all the 0's...",
    "Where did all the internets go",
    "We are not liable for any broken screens as a result of waiting",
    "Like you are Really busy..",
    "Convincing AI not to turn evil..",
    "Your left thumb points to the right and your right thumb points to the left.",
    "How did you get here?",
    "Wait, do you smell something burning?",
    "i'm not lazy, I'm just relaxed!!",
    "Never steal. The government hates competition....",
  ];
  
  let currentIndex = 0;
  let aSpan = document.getElementById('p1');
  
  setInterval(() => {
     
     aSpan.innerHTML= getRandomItem(titles);   
     
     /*currentIndex++;
     
     if (currentIndex === 34)
      currentIndex = 0;*/
  
  }, 3000 || 4000)
  
/*---------------------------------------------------------------------- THEME_SWITCH ----------------------------------------------------------------------*/

      const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    
      function switchTheme(e) {
          if (e.target.checked) {
              document.documentElement.setAttribute('data-theme', 'dark');
          }
          else {
              document.documentElement.setAttribute('data-theme', 'light');
          }    
      }
      
      toggleSwitch.addEventListener('change', switchTheme, false);
      // store user preference for future visits
      function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); //add this
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); //add this
        }    
      }
      const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
      
      if (currentTheme) {
          document.documentElement.setAttribute('data-theme', currentTheme);
      
          if (currentTheme === 'dark') {
              toggleSwitch.checked = true;
          }
      }