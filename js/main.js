// 1.
document.addEventListener('DOMContentLoaded', function(){

  var on_off = document.querySelector('button.switch');

  on_off.addEventListener('click',function(){

    on_off.classList.remove("on")
    on_off.classList.add("off")

    var light_dark = document.querySelector('body');

    if (light_dark.className === 'light'){
          light_dark.classList.remove('light')
          light_dark.classList.add('dark')
        }

    else { light_dark.className === 'dark'
            light_dark.classList.remove('dark')
            light_dark.classList.add('light');
      }

    var text = document.querySelector('.status')

    if (text.innerHTML === "Hi Sean") {
      text.innerHTML = "Kathleen!"

      }
    else {text.innerHTML = "Hi Sean";

  }
})

  });
// 2.
