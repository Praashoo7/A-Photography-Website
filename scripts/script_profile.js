/*<!---------------------------------------------------------------------- HAMBURGER ---------------------------------------------------------------------->*/

const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("blur");
})

document.querySelectorAll(".nav-link1").forEach(n => n.addEventListener("click",() =>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

/*---------------------------------------------------------------------- THEME_SWITCH_START ----------------------------------------------------------------------*/

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
        document.getElementById("namee").innerHTML="Light Mode";
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("namee").innerHTML="Dark Mode";
        localStorage.setItem('theme', 'light'); //add this
    }    
  }
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  
  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
  
      if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
          document.getElementById("namee").innerHTML="Light Mode";
      }
      else if (currentTheme === 'light') {
          document.getElementById("namee").innerHTML="Dark Mode";
      }
  }

/*---------------------------------------------------------------------- THEME_SWITCH_END ----------------------------------------------------------------------*/

  Splitting();