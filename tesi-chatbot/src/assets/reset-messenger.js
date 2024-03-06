window.addEventListener('df-messenger-loaded', () => {
  // Messenger is now ready.
  const messenger = document.querySelector('df-messenger');
  messenger.startNewSession({ retainHistory: false });
});
