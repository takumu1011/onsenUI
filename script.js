document.addEventListener('init', function (e) {
  let page = e.target;
  if (page.id === 'page1') {
    page.querySelector('#push-button').onclick = function () {
      document.querySelector('#myNavigator').pushPage('page2.html', {
        data: {
          title: 'Page2',
        },
      });
    };
  } else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});
