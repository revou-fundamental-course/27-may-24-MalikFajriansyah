document.getElementById('contactForm').addEventListener('submit', function (events) {
    events.preventDefault();

    var notification = document.createElement('div')
    notification.textContent = 'Message sent successfully';
    notification.classList.add('notification');
    document.body.appendChild(notification);
    
    setTimeout(function() {
        notification.remove();
    }, 3000);
})