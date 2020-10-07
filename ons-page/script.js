document.addEventListener('init', function (e) {
  const page = event.target;

  if (page.id === 'page1') {
    console.log('init page1');
  } else if (page.id === 'page2') {
    console.log('init page2');
  }
});

document.addEventListener('show', function (e) {
  const page = event.target;

  if (page.id === 'page1') {
    console.log('show page1');
  } else if (page.id === 'page2') {
    console.log('show page2');
  }
});

document.addEventListener('hide', function (e) {
  const page = event.target;

  if (page.id === 'page1') {
    console.log('hide page1');
  } else if (page.id === 'page2') {
    console.log('hide page2');
  }
});

document.addEventListener('destroy', function (e) {
  const page = event.target;

  if (page.id === 'page1') {
    console.log('destroy page1');
  } else if (page.id === 'page2') {
    console.log('destroy page2');
  }
});

ons.ready(function () {
  console.log('ons-ready');
});
