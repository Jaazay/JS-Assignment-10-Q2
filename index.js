function toggleDetails() {
    var detailsElement = document.getElementById('fullDetails');
    var buttonElement = document.querySelector('button');

    if (detailsElement.style.display === 'none') {
        detailsElement.style.display = 'block';
        buttonElement.textContent = 'Read less';
    } else {
        detailsElement.style.display = 'none';
        buttonElement.textContent = 'Read more';
    }
}