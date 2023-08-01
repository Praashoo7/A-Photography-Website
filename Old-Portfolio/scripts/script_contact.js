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

/*<!---------------------------------------------------------------------- SEND_MAIL ---------------------------------------------------------------------->*/

  function sendmail(){

      b=document.getElementById("button");
      n=document.getElementById('name').value;
      var p1 = document.querySelector('#p1');
      p1.style.opacity = 0;

      var isOnLine = navigator.onLine;
      if (isOnLine) {
        document.getElementById("button").innerHTML = "&#160;&#160;&#160;&#160;Sending..&#160;&#160;&#160;&#160;";
        b.style.opacity = 0.5;
        
        var params = {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        message:document.getElementById('message').value,
        };

        const serviceID="service_vimp9kl";
        const templateID="template_pn1gwcu";

        emailjs.send(serviceID,templateID,params)
        .then(
             res =>{
                document.getElementById('name').value="";
                document.getElementById('email').value="";
                document.getElementById('message').value="";
                console.log(res);
              
                document.getElementById("button").innerHTML = "&#160;&#160;&#160;&#160;Send&#160;&#160;&#160;&#160;";
                b.style.opacity = 1;

                document.getElementById("p1").innerHTML = "Hi "+n+", Thank you For Reaching Out.";
                p1.style.opacity = 1;
            }
        )
        .catch((err)=>console.log(err));
        } else {
            document.getElementById("p1").innerHTML = "Hi "+n+", Please check your Internet Connection.";
            p1.style.opacity = 1;
        }
  }