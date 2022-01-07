// Notif-Modal cookie logic
const notifModal = document.getElementById('notif-modal');
if (!(decodeURIComponent(document.cookie).split('; ').includes('notified=true') ||decodeURIComponent(document.cookie).split('; ').includes('visited=true'))) {
  notifModal.style.display = 'block';
  document.cookie = `visited=true; expires=${new Date(Date.now() + 14*24*60*60*1000).toUTCString()}`;
}

// Notif-Modal close logic
document.querySelector('#notif-modal .close').onclick = function() { notifModal.style.display = 'none'; }
window.onclick = function(event) { if (event.target == notifModal) { notifModal.style.display = 'none'; } }

// Notif-Form submit logic
function giveNotifCookie() {
  document.cookie = `notified=true; expires=${new Date('Jan 1, 2023').toUTCString()}`;
}