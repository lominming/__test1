
function doubleCount() {
  $.set('double', $.get('count') * 2);
}
$.subscribe('count', doubleCount);