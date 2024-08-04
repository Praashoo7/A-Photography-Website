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

/*---------------------------------------------------------------------- TEXT_SHADOW_CURSOR ----------------------------------------------------------------------*/

const p = document.querySelector('span');

const clamp = (a, m, n) => {
  const max = Math.max(m, n);
  const min = Math.min(m, n);

  return Math.max(min, Math.min(max, a));
};

const MAX_SHADOW_OFFSET = 30;

const paint = (x, y) => {
  const r = p.getBoundingClientRect();
  const o = Math.min(r.width, r.height, MAX_SHADOW_OFFSET); // compute max shadow offset
  
  const mx = clamp(x, r.left - o, r.right + o); // clamp mouse coordinates within the shadow projection bounding box.
  const my = clamp(y, r.top - o, r.bottom + o);
  const px = r.right - r.width / 2; // compute element bb midpoints.
  const py = r.bottom - r.height / 2;
  const nx = (mx - px) / (r.right - r.left + 2 * o); // project mouse position relative to the bounding box to [-.5, .5];
  const ny = (my - py) / (r.bottom - r.top + 2 * o); 
  
  requestAnimationFrame(() => {
    p.style.textShadow = `${-1 * nx * o}px ${-1 * ny * o}px hsl(210, 1%, 62%)`;
  });
};

document.addEventListener('mousemove', (e) => paint(e.clientX, e.clientY), {
  passive: true
});

/*---------------------------------------------------------------------- SCROLL_TO_TOP ----------------------------------------------------------------------*/

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

// /*---------------------------------------------------------------------- INTERNET_LOAD ----------------------------------------------------------------------*/

// function load(){

//   var isOnLine = navigator.onLine;
//         if (isOnLine) {
//           $("[id='loading']").css({"opacity":"1"});
//         }
//         else{
//           $("[id='loading']").css({"opacity":"0"});
//         }
// }



const data = [
  {"id": 1, isTall: false ,src: "https://drive.google.com/thumbnail?id=1Xt0_j3iqH8GCaHk9EmrCrgj-JMnq46aJ&sz=w1000", shot_on: "Mi A2", location: "Surat", date: "12 November 2018", lens: "NORMAL"}, 
  {"id": 2, isTall: false ,src: "https://drive.google.com/thumbnail?id=1xwMzZIAvbCpcmTFTpb-IaCiXiZweiHgb&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "14 December 2021", lens: "NORMAL"}, 
  {"id": 3, isTall: false ,src: "https://drive.google.com/thumbnail?id=1En07dlJu2L6dcOCAdDlGpx8sGJa6pZpK&sz=w1000", shot_on: "Mi A2", location: "Pune", date: "10 March 2022", lens: "NORMAL"}, 
  {"id": 4, isTall: false ,src: "https://drive.google.com/thumbnail?id=1-AULWFNFL0c04Srnv94mAnWxKUQx8bHE&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "19 April 2019", lens: "NORMAL"}, 
  {"id": 5, isTall: false ,src: "https://drive.google.com/thumbnail?id=1PPG0IwiL8F5YonvF4G50173b-0u9-ers&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "5 January 2021", lens: "NORMAL"}, 
  {"id": 6, isTall: false ,src: "https://drive.google.com/thumbnail?id=1mdEUSXv0ydBWaztJAURcnbmr_03DzDRJ&sz=w1000", shot_on: "Mi A2", location: "Pune", date: "10 March 2022", lens: "NORMAL"}, 
  {"id": 7, isTall: true ,src: "https://drive.google.com/thumbnail?id=1aMZ4xKEA0Cikz7_YDmXTpDyffeHVt1Mi&sz=w1000", shot_on: "Mi A2", location: "Pune", date: "26 May 2022", lens: "NORMAL"}, 
  {"id": 8, isTall: false ,src: "https://drive.google.com/thumbnail?id=1lWHhZGjhvvAXzd_9M9QQSudfN7Spy-s0&sz=w1000", shot_on: "Mi A2", location: "Daman", date: "13 July 2022", lens: "ULTRAWIDE"}, 
  {"id": 9, isTall: false ,src: "https://drive.google.com/thumbnail?id=1eXnOhQEoomTwOAvAypY1IcGlZ26W0qFY&sz=w1000", shot_on: "Mi 11X", location: "Ankleshwar", date: "12 July 2022", lens: "Macro"}, 
  {"id": 10, isTall: true ,src: "https://drive.google.com/thumbnail?id=1l54BsTsIt_8s6sKRMfYI1e7pTSiun0gL&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "5 June 2019", lens: "NORMAL"}, 
  {"id": 11, isTall: false ,src: "https://drive.google.com/thumbnail?id=1hVtW56vX16QZkKBPJJH_OjOqdm7Yrp-g&sz=w1000", shot_on: "Mi A2", location: "Umbhrat", date: "25 November 2018", lens: "NORMAL"}, 
  {"id": 12, isTall: false ,src: "https://drive.google.com/thumbnail?id=1pqqVrgIsvsXi0yAMywMs_qZTCpJRTSqE&sz=w1000", shot_on: "Mi A2", location: "Surat", date: "11 November 2018", lens: "NORMAL"}, 
  {"id": 13, isTall: true ,src: "https://drive.google.com/thumbnail?id=1-iAxtQUYwq6-AtD6Qrd8bZTT9dM8a86v&sz=w1000", shot_on: "Redmi 4", location: "Pune", date: "23 June 2020", lens: "NORMAL"}, 
  {"id": 14, isTall: true ,src: "https://drive.google.com/thumbnail?id=1UC9i0qstLdjHlVp8xv4Qw_WdoYc6ov3A&sz=w1000", shot_on: "Redmi 4", location: "Pune", date: "10 July 2020", lens: "NORMAL"}, 
  {"id": 15, isTall: false ,src: "https://drive.google.com/thumbnail?id=19S4B1WWK_E4TtHFtS8yLcGYPb4gEqqBe&sz=w1000", shot_on: "Mi A2", location: "Umbhrat", date: "25 November 2018", lens: "NORMAL"}, 
  {"id": 16, isTall: true ,src: "https://drive.google.com/thumbnail?id=10ksbgK0gdJeZiHf4GEaaFO0q3K6WlTYF&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "14 December 2021", lens: "NORMAL"}, 
  {"id": 17, isTall: false ,src: "https://drive.google.com/thumbnail?id=1wNUL7PWN-a-44fnkkakScn3mosmZc298&sz=w1000", shot_on: "Mi A2", location: "Umbhrat", date: "25 November 2018", lens: "NORMAL"}, 
  {"id": 18, isTall: false ,src: "https://drive.google.com/thumbnail?id=1l4VkbAr_fluaKSY7izX6s5hOVzlBjcGh&sz=w1000", shot_on: "Mi A2", location: "Umbhrat", date: "25 November 2018", lens: "NORMAL"}, 
  {"id": 19, isTall: true ,src: "https://drive.google.com/thumbnail?id=13YQvJQZAp3QO1Qjc2FW3sfMDABwLolTr&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "5 June 2019", lens: "NORMAL"}, 
  {"id": 20, isTall: false ,src: "https://drive.google.com/thumbnail?id=1jFyCDKVrtoAV-aitf-YehKxODXvitQo5&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "5 June 2019", lens: "NORMAL"}, 
  {"id": 21, isTall: true ,src: "https://drive.google.com/thumbnail?id=1odc_CFR31vDe-8-tJyBIj1FtjxvRmL6O&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "19 April 2019", lens: "NORMAL"}, 
  {"id": 22, isTall: false ,src: "https://drive.google.com/thumbnail?id=1IBMdIScm0Cmg0deUD7lGBvLxdx3HpZPa&sz=w1000", shot_on: "Mi A2", location: "Umbhrat", date: "25 November 2018", lens: "NORMAL"}, 
  {"id": 23, isTall: false ,src: "https://drive.google.com/thumbnail?id=1djQeT3Lo5akcHzIkne5gesUOMJslBgTB&sz=w1000", shot_on: "Mi A2", location: "Pune", date: "18 March 2022", lens: "NORMAL"}, 
  {"id": 24, isTall: false ,src: "https://drive.google.com/thumbnail?id=1jOTL4Op_wIXH0tfwGhbmr9oXwx7VoZ8D&sz=w1000", shot_on: "Mi A2", location: "Umbhrat", date: "25 November 2018", lens: "NORMAL"}, 
  {"id": 25, isTall: false ,src: "https://drive.google.com/thumbnail?id=1fXJ5W-Gc9O7PwDDjOuewG8IQL354ZW_M&sz=w1000", shot_on: "Mi 11X", location: "Ankleshwar", date: "24 June 2022", lens: "MACRO"}, 
  {"id": 26, isTall: false ,src: "https://drive.google.com/thumbnail?id=1g2VcnQS2Zb5kyQXUDRLsZ_6LA2LA_0gt&sz=w1000", shot_on: "Mi A2", location: "Umbhrat", date: "25 November 2018", lens: "NORMAL"}, 
  {"id": 27, isTall: false ,src: "https://drive.google.com/thumbnail?id=1h9a1V_fK7YOCQWEl_YxDsUeBsYHkPkYm&sz=w1000", shot_on: "Mi A2", location: "Umbhrat", date: "25 November 2018", lens: "NORMAL"}, 
  {"id": 28, isTall: false ,src: "https://drive.google.com/thumbnail?id=1Wc4U1vuhH-90o7S13hI4tTHOFGGY_7rv&sz=w1000", shot_on: "Mi A2", location: "Umbhrat", date: "25 November 2018", lens: "NORMAL"}, 
  {"id": 29, isTall: false ,src: "https://drive.google.com/thumbnail?id=1Vu85-TgyrUp-0nm-SX9st-gbpYhmWiGo&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "13 June 2019", lens: "NORMAL"}, 
  {"id": 30, isTall: false ,src: "https://drive.google.com/thumbnail?id=1onDxxkkc7Wgf_Spc6NezvRFlHRJtX_o2&sz=w1000", shot_on: "Mi A2", location: "Umbhrat", date: "25 November 2018", lens: "NORMAL"}, 
  {"id": 31, isTall: false ,src: "https://drive.google.com/thumbnail?id=1UIkFCvPygDcK8FYr_5i7pwz0azuXpx7w&sz=w1000", shot_on: "Mi A2", location: "Umbhrat", date: "25 November 2018", lens: "NORMAL"}, 
  {"id": 32, isTall: true ,src: "https://drive.google.com/thumbnail?id=1Yv2JnUT_xHNGpoQnkijFB377Mq_xSmph&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "19 April 2019", lens: "NORMAL"}, 
  {"id": 33, isTall: false ,src: "https://drive.google.com/thumbnail?id=1AVBbkWpllzZZHDsn9VgK1iOXDt1vL5xm&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "19 April 2019", lens: "NORMAL"}, 
  {"id": 34, isTall: false ,src: "https://drive.google.com/thumbnail?id=1Jxmz5jR-Cfa9zWV3mrEYagksbqYtf90Z&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "5 June 2019", lens: "NORMAL"}, 
  {"id": 35, isTall: false ,src: "https://drive.google.com/thumbnail?id=1GyOuVjyFcmTGfOpiZ5OGq2fIelzJS2Iv&sz=w1000", shot_on: "Mi A2", location: "Pune", date: "18 March 2022", lens: "NORMAL"}, 
  {"id": 36, isTall: false ,src: "https://drive.google.com/thumbnail?id=1-2LLkRp5oNpDFllXa83e6tVRKnV-FKdg&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "5 November 2018", lens: "NORMAL"}, 
  {"id": 37, isTall: false ,src: "https://drive.google.com/thumbnail?id=131AKR1gxN2aONuRMVk6z_gahk4UUKjm1&sz=w1000", shot_on: "Mi A2", location: "Umbhrat", date: "25 November 2018", lens: "NORMAL"}, 
  {"id": 38, isTall: true ,src: "https://drive.google.com/thumbnail?id=1vNGLsujKsBzjdh4aObGr4I9koR43BkaB&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "19 April 2019", lens: "NORMAL"}, 
  {"id": 39, isTall: false ,src: "https://drive.google.com/thumbnail?id=1ajTgAfzywdC88xrjJRcFe2_4jnFzPkrK&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "27 May 2019", lens: "NORMAL"}, 
  {"id": 40, isTall: true ,src: "https://drive.google.com/thumbnail?id=1WrZ9zTwnxCDSxOq_zsskKaJsxv7LytwB&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "13 October 2020", lens: "NORMAL"}, 
  {"id": 41, isTall: true ,src: "https://drive.google.com/thumbnail?id=1yERxi3EuVbrtJFz2B96-b54Exjyvok7w&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "23 June 2019", lens: "NORMAL"}, 
  {"id": 42, isTall: false ,src: "https://drive.google.com/thumbnail?id=1QZH_lN47Ryiq3Y8HkUQp2Z5g42vAtrMn&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "5 November 2019", lens: "NORMAL"}, 
  {"id": 43, isTall: true ,src: "https://drive.google.com/thumbnail?id=1z1ve-ygTWI7kR9-5dK4YJslAdo3fUF2Y&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "8 June 2019", lens: "NORMAL"}, 
  {"id": 44, isTall: true ,src: "https://drive.google.com/thumbnail?id=1Ls9qO2LoTeUn3xf1IMnKfN5A-bDqjAht&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "13 October 2020", lens: "NORMAL"}, 
  {"id": 45, isTall: false ,src: "https://drive.google.com/thumbnail?id=1SkYbspEtzS7eCu5TUyqF44j2T_GCRsfA&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "5 June 2019", lens: "NORMAL"}, 
  {"id": 46, isTall: true ,src: "https://drive.google.com/thumbnail?id=13xxKRGgdoS3wKdlB-eWZDK8jB6FEjFhv&sz=w1000", shot_on: "Mi A2", location: "Bhortek", date: "6 December 2020", lens: "NORMAL"}, 
  {"id": 47, isTall: false ,src: "https://drive.google.com/thumbnail?id=1rBm_mFVCFel__oznD2q9qcgUF9d7a-S6&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "5 June 2019", lens: "NORMAL"}, 
  {"id": 48, isTall: false ,src: "https://drive.google.com/thumbnail?id=1gKXMZV_vLN0fVPWCszI34gClKRHKd6ix&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "5 June 2019", lens: "NORMAL"}, 
  {"id": 49, isTall: true ,src: "https://drive.google.com/thumbnail?id=19Wf2zLrIWJPRBNadx3g-5oPcS_briALh&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "21 October 2020", lens: "NORMAL"}, 
  {"id": 50, isTall: true ,src: "https://drive.google.com/thumbnail?id=1AG8589oxqk_1THzgaa2ejTu3LMHJEczC&sz=w1000", shot_on: "Mi A2", location: "Bhortek", date: "6 December 2020", lens: "NORMAL"}, 
  {"id": 51, isTall: false ,src: "https://drive.google.com/thumbnail?id=10x_XqTpX95z5K8IYMuL0wHkE01zBD_K1&sz=w1000", shot_on: "Mi 11X", location: "Daman", date: "7 November 2021", lens: "Normal"}, 
  {"id": 52, isTall: false ,src: "https://drive.google.com/thumbnail?id=12kYGxPZu67bgLOmRYVpxEPOGfwSKjvHK&sz=w1000", shot_on: "Mi A2", location: "Pune", date: "7 March 2022", lens: "NORMAL"}, 
  {"id": 53, isTall: false ,src: "https://drive.google.com/thumbnail?id=17LtnTX2gofOxzjpc_StFtvCAlPBzwpHN&sz=w1000", shot_on: "Mi A2", location: "Pune", date: "6 March 2022", lens: "NORMAL"}, 
  {"id": 54, isTall: false ,src: "https://drive.google.com/thumbnail?id=1fdUi1YG1uwnOx425aEf536e4I6Cx8xOt&sz=w1000", shot_on: "Mi A2", location: "Ankleshwar", date: "5 June 2019", lens: "NORMAL"}
];


let photos = data.map((values) => {

  const containerClass = values.isTall ? "image-container_p" : "image-container";

  return `<div class="i">
        <div class="${containerClass}">
            <p class="ih" id="loading">Loading..</p>
            <img src="${values.src}" alt="Image" loading="lazy">
            <div class="data_a">
              <div class="info">
                  <div class="tab">
                      <input type="checkbox" id="chck${values.id}">
                      <label class="tab-label" for="chck${values.id}">Info</label>
                      <div class="tab-content">
                      Shot On : ${values.shot_on}<br>
                      Location : ${values.location}<br>
                      Date : ${values.date}<br>
                      Lens : ${values.lens}
                      </div>
                  </div>
              </div>
              <a href="${values.src}" download="PhotographyHOOD-${values.id}">
              <div class="download">
                  <i class="bi bi-download" style="margin-left: 0.25em;"></i>
              </div>
              </a>
              </div>
        </div>
    </div>`
})

document.getElementById("photos").innerHTML = photos.join("");


/*<!---------------------------------------------------------------------- MAIL-TO ---------------------------------------------------------------------->*/


function mailDefault(){
  var email = "meprashant00@gmail.com";
  window.open(`mailto:${email}`);
}