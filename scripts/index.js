/*--------------------------- THEME_SWITCH_START ---------------------------*/

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
function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.getElementById("namee").innerHTML="Light Mode";
      localStorage.setItem('theme', 'dark');
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.getElementById("namee").innerHTML="Dark Mode";
      localStorage.setItem('theme', 'light');
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

/*---------------------------- TEXT_SHADOW_CURSOR ----------------------------*/

const p = document.querySelector('span');

const clamp = (a, m, n) => {
  const max = Math.max(m, n);
  const min = Math.min(m, n);

  return Math.max(min, Math.min(max, a));
};

const MAX_SHADOW_OFFSET = 30;

const paint = (x, y) => {
  const r = p.getBoundingClientRect();
  const o = Math.min(r.width, r.height, MAX_SHADOW_OFFSET);
  
  const mx = clamp(x, r.left - o, r.right + o);
  const my = clamp(y, r.top - o, r.bottom + o);
  const px = r.right - r.width / 2;
  const py = r.bottom - r.height / 2;
  const nx = (mx - px) / (r.right - r.left + 2 * o);
  const ny = (my - py) / (r.bottom - r.top + 2 * o); 
  
  requestAnimationFrame(() => {
    p.style.textShadow = `${-1 * nx * o}px ${-1 * ny * o}px var(--heading-shadow-color)`;
  });
};

document.addEventListener('mousemove', (e) => paint(e.clientX, e.clientY), {
  passive: true
});

/*------------------------------- SCROLL_TO_TOP -------------------------------*/

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

// /*----------------------------- INTERNET_LOAD -----------------------------*/

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

{/* <div class="i">
        <div class="${containerClass}" id="container${values.id}">
            <img id="loadIMG${values.id}" class="loadIMG" src="${values.src}" alt="Image" loading="lazy">
            <div class="data_a">
            <label class="checkBoxcontainer">
              <input type="checkbox" data-image-id="image${values.id || 'default'}">
              <div class="checkmark">
                <svg class="heart" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#FFFFFF"/>
                </svg>
                <svg viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" class="icon">
                <path d="M 24.10 6.29 Q 28.34 7.56 28.00 12.00 Q 27.56 15.10 27.13 18.19 A 0.45 0.45 4.5 0 0 27.57 18.70 Q 33.16 18.79 38.75 18.75 Q 42.13 18.97 43.23 21.45 Q 43.91 22.98 43.27 26.05 Q 40.33 40.08 40.19 40.44 Q 38.85 43.75 35.50 43.75 Q 21.75 43.75 7.29 43.75 A 1.03 1.02 0.0 0 1 6.26 42.73 L 6.42 19.43 A 0.54 0.51 -89.4 0 1 6.93 18.90 L 14.74 18.79 A 2.52 2.31 11.6 0 0 16.91 17.49 L 22.04 7.17 A 1.74 1.73 21.6 0 1 24.10 6.29 Z M 21.92 14.42 Q 20.76 16.58 19.74 18.79 Q 18.74 20.93 18.72 23.43 Q 18.65 31.75 18.92 40.06 A 0.52 0.52 88.9 0 0 19.44 40.56 L 35.51 40.50 A 1.87 1.83 5.9 0 0 37.33 39.05 L 40.51 23.94 Q 40.92 22.03 38.96 21.97 L 23.95 21.57 A 0.49 0.47 2.8 0 1 23.47 21.06 Q 23.76 17.64 25.00 12.00 Q 25.58 9.36 24.28 10.12 Q 23.80 10.40 23.50 11.09 Q 22.79 12.80 21.92 14.42 Z M 15.57 22.41 A 0.62 0.62 0 0 0 14.95 21.79 L 10.01 21.79 A 0.62 0.62 0 0 0 9.39 22.41 L 9.39 40.07 A 0.62 0.62 0 0 0 10.01 40.69 L 14.95 40.69 A 0.62 0.62 0 0 0 15.57 40.07 L 15.57 22.41 Z" fill-opacity="1.000"></path>
                <circle r="1.51" cy="37.50" cx="12.49" fill-opacity="1.000"></circle>
                </svg>
              </div>
              <p class="likeCount" data-image-id="image${values.id || 'default'}">0</p>
            </label>
            <div class="infoDownWrap">
              <div class="info">
                  <div class="tab">
                      <input type="checkbox" id="chck${values.id}">
                      <label class="tab-label" for="chck${values.id}">Info</label>
                      <div class="tab-content">
                      Shot On : ${values.shot_on}<br>
                      <!-- Location : ${values.location}<br> -->
                      Date : ${values.date}<br>
                      Lens : ${values.lens}
                      </div>
                  </div>
              </div>
              <a href="${values.src}" download="PhotographyHOOD-${values.id}" onclick="updateDownloadCount('image${values.id}'); return true;">
              <div class="download">
                  <i class="bi bi-download" style="margin-left: 0.25em;"></i>
                  <span class="downloadCount" data-image-id="image${values.id}"></span>
              </div>
              </a>
              </div>
              </div>
        </div>
    </div> */}

let photos = data.map((values) => {
  const containerClass = values.isTall ? "image-container_p" : "image-container";

  return `<div class="i">
        <div class="${containerClass}" id="container${values.id}">
            <img id="loadIMG${values.id}" class="loadIMG" src="${values.src}" alt="Image" loading="lazy">
            <div class="data_a">
            <div class="infoDownWrap">
              <div class="info">
                  <div class="tab">
                      <input type="checkbox" id="chck${values.id}">
                      <label class="tab-label" for="chck${values.id}">Info</label>
                      <div class="tab-content">
                      Shot On : ${values.shot_on}<br>
                      <!-- Location : ${values.location}<br> -->
                      Date : ${values.date}<br>
                      Lens : ${values.lens}
                      </div>
                  </div>
              </div>
              <a href="${values.src}" download="PhotographyHOOD-${values.id}" onclick="updateDownloadCount('image${values.id}'); return true;">
              <div class="download">
                  <i class="bi bi-download" style="margin-left: 0.25em;"></i>
                  <span class="downloadCount" data-image-id="image${values.id}"></span>
              </div>
              </a>
              </div>
              </div>
        </div>
    </div>`;
});

document.getElementById("photos").innerHTML = photos.join("");

document.querySelectorAll('.loadIMG').forEach(img => {
  img.addEventListener('load', function() {
    const containerId = this.id.replace('loadIMG', 'container');
    const container = document.getElementById(containerId);
    container.classList.add('loaded');
    setTimeout(() => {
      container.classList.add('hide-after');
    }, 400);
  });
});


/*<!-------------------------------- MAIL-TO -------------------------------->*/


function mailDefault(){
  var email = "meprashant00@gmail.com";
  window.open(`mailto:${email}`);
}


/*<!------------------------------ CURRENT-YEAR ------------------------------>*/


document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById("year-c").textContent = new Date().getFullYear();
});



/*<!------------------------- LIKE-COUNTER-FIREBASE ------------------------->*/

// document.addEventListener('DOMContentLoaded', () => {
//   const likeCheckboxes = document.querySelectorAll('input[type="checkbox"][data-image-id]');
//   const likeCounts = document.querySelectorAll('.likeCount[data-image-id]');

//   likeCounts.forEach(counter => {
//     const imageId = counter.dataset.imageId;
//     if (!imageId) {
//       console.error('Like counter is missing data-image-id attribute:', counter);
//       return;
//     }
//     const countRef = firebase.database().ref('likeCounts/' + imageId);

//     countRef.on('value', (snapshot) => {
//       counter.textContent = snapshot.val() || 0;
//     }, (error) => {
//       console.error('Error fetching like count:', error);
//     });
//   });

//   likeCheckboxes.forEach(checkbox => {
//     const imageId = checkbox.dataset.imageId;
//     if (!imageId) {
//       console.error('Like checkbox is missing data-image-id attribute:', checkbox);
//       return;
//     }

//     const countRef = firebase.database().ref('likeCounts/' + imageId);
//     const likedRef = firebase.database().ref('userLikes/' + imageId);

//     likedRef.once('value', (snapshot) => {
//       checkbox.checked = snapshot.val() === true;
//     }, (error) => {
//       console.error('Error fetching user like status:', error);
//     });

//     checkbox.addEventListener('change', () => {
//       countRef.transaction((currentCount) => {
//         if (checkbox.checked) {
//           likedRef.set(true);
//           return (currentCount || 0) + 1;
//         } else {
//           likedRef.set(false);
//           return Math.max((currentCount || 0) - 1, 0);
//         }
//       }, (error, committed, snapshot) => {
//         if (error) {
//           console.error('Error updating like count:', error);
//         } else if (!committed) {
//           console.warn('Like count update not committed');
//         }
//       });
//     });
//   });

// });



// /*<!----------------------- DOWNLOAD-COUNTER-FIREBASE ----------------------->*/

// function updateDownloadCount(imageId) {
//   const db = firebase.database();
//   const downloadRef = db.ref('downloads/' + imageId);

//   downloadRef.transaction((currentCount) => {
//     return (currentCount || 0) + 1;
//   }).then(() => {
//     // Update the UI
//     const countElement = document.querySelector(`[data-image-id="${imageId}"]`);
//     if (countElement) {
//       countElement.textContent = parseInt(countElement.textContent) + 1;
//     }
//   }).catch((error) => {
//     console.error("Error updating download count:", error);
//   });
// }

// function initializeDownloadCounts() {
//   const db = firebase.database();
//   const downloadCountElements = document.querySelectorAll('.downloadCount');

//   downloadCountElements.forEach((element) => {
//     const imageId = element.getAttribute('data-image-id');
//     const downloadRef = db.ref('downloads/' + imageId);

//     downloadRef.once('value').then((snapshot) => {
//       const count = snapshot.val() || 0;
//       element.textContent = count;
//     }).catch((error) => {
//       console.error("Error fetching download count:", error);
//     });
//   });
// }

// document.addEventListener('DOMContentLoaded', initializeDownloadCounts);



/*<!------------------------- MOUSE-DISAPPEAR ------------------------->*/

window.onscroll = function(e) {
  document.getElementById('mouse').style.opacity = 0;
  if(window.scrollY === 0){
    document.getElementById('mouse').style.opacity = 1;
  }
}







{/* <a href="#" onclick="downloadGoogleDriveImage('${values.src}', 'PhotographyHOOD-${values.id}'); updateDownloadCount('image${values.id}'); return false;">
  <div class="download">
    <i class="bi bi-download" style="margin-left: 0.25em;"></i>
    <span class="downloadCount" data-image-id="image${values.id}"></span>
  </div>
</a>


function downloadGoogleDriveImage(url, fileName) {
  // Extract the file ID from the Google Drive URL
  console.log(fileName)
  const fileId = url.match(/id=([^&]+)/)[1];
  
  // Construct the direct download link
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  
  // Create a temporary anchor element
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = downloadUrl;
  a.download = fileName;  // Set the desired filename
  
  // Append to the body and trigger the download
  document.body.appendChild(a);
  a.click();
  
  // Clean up
  setTimeout(() => {
    document.body.removeChild(a);
  }, 100);
} */}