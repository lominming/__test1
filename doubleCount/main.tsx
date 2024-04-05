function doubleCount() {
  $.set('double', $.get('count') * 2);
}
$.subscribe('count', doubleCount);

function render() {
  return (<div>{$.get('count')} * 2 = {$.get('double')}</div>)
}

$.set('ui', render);