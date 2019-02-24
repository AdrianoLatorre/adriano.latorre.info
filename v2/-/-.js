
function localize() {
  var lslang = localStorage.getItem('language');
  if(lslang) {
    if(lslang != '/') {
      changeLanguage(lslang);
    }
  } else {
    browserLanguage();
    localize();
  }
}

function storeLanguage(newlang) {
  localStorage.setItem('language', newlang);
  changeLanguage(newlang);
}

function changeLanguage(newlang) {
  window.location.href = newlang;
}

function browserLanguage() {
  if(navigator.languages) {
    var navlang = navigator.languages[0].substring(0,2);
    switch (navlang) {
      case 'ca':
      case 'es':
      localStorage.setItem('language', '/' + navlang + '/');
      break;
      default:
      localStorage.setItem('language', '/');
    }
  } else {
    localStorage.setItem('language', '/');
  }
}
