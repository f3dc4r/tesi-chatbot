 // Set the random session ID to the <df-messenger> element
//  const dfMessenger = document.querySelector('df-messenger');
//  if (dfMessenger) {
//    dfMessenger.startNewSession({ retainHistory: false });
//  }

window.addEventListener('df-messenger-loaded', () => {
  // Messenger is now ready.
  const messenger = document.querySelector('df-messenger');

    messenger.startNewSession({ retainHistory: false });

});

//  window.addEventListener('df-session-expired', () => {
//   const messenger = document.shadowRoot.querySelector('df-messenger');
//   if (messenger) {
//     messenger.startNewSession({ retainHistory: false });
//   }
// });
