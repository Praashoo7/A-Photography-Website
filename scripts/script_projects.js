/*<!---------------------------------------------------------------------- THEME_SWITCH ---------------------------------------------------------------------->*/

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

/*<!---------------------------------------------------------------------- SHARE_BUTTON ---------------------------------------------------------------------->*/

  function copyToClipboard1(element) {

  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  document.getElementById("share1").innerHTML = "&#160;&#160;Link Copied!&#160;&#160;";
  share1.style.opacity=0.5;

}

setInterval(() => {
  document.getElementById("share1").innerHTML = "&#160;&#160;Share&#160;&#160;"; 
  share1.style.opacity=1;
   /*currentIndex++;
   if (currentIndex === 34)
    currentIndex = 0;*/
}, 5000)

function copyToClipboard2(element) {

var $temp = $("<input>");
$("body").append($temp);
$temp.val($(element).text()).select();
document.execCommand("copy");
$temp.remove();
document.getElementById("share2").innerHTML = "&#160;&#160;Link Copied!&#160;&#160;";
share2.style.opacity=0.5;

}

setInterval(() => {
document.getElementById("share2").innerHTML = "&#160;&#160;Share&#160;&#160;"; 
share2.style.opacity=1;
 /*currentIndex++;
 if (currentIndex === 34)
  currentIndex = 0;*/
}, 5000)

function copyToClipboard3(element) {

var $temp = $("<input>");
$("body").append($temp);
$temp.val($(element).text()).select();
document.execCommand("copy");
$temp.remove();
document.getElementById("share3").innerHTML = "&#160;&#160;Link Copied!&#160;&#160;";
share3.style.opacity=0.5;

}

setInterval(() => {
document.getElementById("share3").innerHTML = "&#160;&#160;Share&#160;&#160;"; 
share3.style.opacity=1;
 /*currentIndex++;
 if (currentIndex === 34)
  currentIndex = 0;*/
}, 5000)

function copyToClipboard4(element) {

var $temp = $("<input>");
$("body").append($temp);
$temp.val($(element).text()).select();
document.execCommand("copy");
$temp.remove();
document.getElementById("share4").innerHTML = "&#160;&#160;Link Copied!&#160;&#160;";
share4.style.opacity=0.5;

}

setInterval(() => {
document.getElementById("share4").innerHTML = "&#160;&#160;Share&#160;&#160;"; 
share4.style.opacity=1;
 /*currentIndex++;
 if (currentIndex === 34)
  currentIndex = 0;*/
}, 5000)

function copyToClipboard5(element) {

var $temp = $("<input>");
$("body").append($temp);
$temp.val($(element).text()).select();
document.execCommand("copy");
$temp.remove();
document.getElementById("share5").innerHTML = "&#160;&#160;Link Copied!&#160;&#160;";
share5.style.opacity=0.5;

}

setInterval(() => {
document.getElementById("share5").innerHTML = "&#160;&#160;Share&#160;&#160;"; 
share5.style.opacity=1;
 /*currentIndex++;
 if (currentIndex === 34)
  currentIndex = 0;*/
}, 5000)

function copyToClipboard6(element) {

var $temp = $("<input>");
$("body").append($temp);
$temp.val($(element).text()).select();
document.execCommand("copy");
$temp.remove();
document.getElementById("share6").innerHTML = "&#160;&#160;Link Copied!&#160;&#160;";
share6.style.opacity=0.5;
}

setInterval(() => {
document.getElementById("share6").innerHTML = "&#160;&#160;Share&#160;&#160;"; 
share6.style.opacity=1;
 /*currentIndex++;
 if (currentIndex === 34)
  currentIndex = 0;*/
}, 5000)

function copyToClipboard7(element) {

var $temp = $("<input>");
$("body").append($temp);
$temp.val($(element).text()).select();
document.execCommand("copy");
$temp.remove();
document.getElementById("share7").innerHTML = "&#160;&#160;Link Copied!&#160;&#160;";
share7.style.opacity=0.5;

}

setInterval(() => {
document.getElementById("share7").innerHTML = "&#160;&#160;Share&#160;&#160;"; 
share7.style.opacity=1;
 /*currentIndex++;
 if (currentIndex === 34)
  currentIndex = 0;*/
}, 5000)

/*<!---------------------------------------------------------------------- SCROLL_TO_TOP ---------------------------------------------------------------------->*/

  window.addEventListener('scroll', e => {
    var el = document.getElementById('jsScroll');
    if(window.scrollY > 200) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }