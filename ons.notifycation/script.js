// ons.notification.alert({
//   message: 'Hello world',
// });

// ons.notification.confirm({
//   message: 'Are you ready?',
//   callback: function (answer) {
//     alert('default');
//   },
// });

ons.notification.prompt({
  message: 'How old are you?',
  callback: function (age) {
    ons.notification.alert({
      message: `You are ${age} years old`,
    });
  },
});
