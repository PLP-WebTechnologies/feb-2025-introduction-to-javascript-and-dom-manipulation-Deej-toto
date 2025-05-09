// Function to change text content
document.getElementById('change-text-button').addEventListener('click', function() {
    document.getElementById('text-content').textContent = 'The text content has been changed!';
});

// Function to toggle an element's visibility
document.getElementById('toggle-element-button').addEventListener('click', function() {
    let dynamicElement = document.getElementById('dynamic-element');
    if (dynamicElement.style.display === 'none' || dynamicElement.style.display === '') {
        dynamicElement.style.display = 'block';
        dynamicElement.textContent = 'This is a dynamically added element!';
        dynamicElement.style.backgroundColor = '#90EE90';
    } else {
        dynamicElement.style.display = 'none';
    }
});
