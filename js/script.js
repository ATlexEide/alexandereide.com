function toggleLightMode() {
    const toggleLightModeButton = document.getElementById('light-mode-button');
    const body = document.getElementById('body')
    toggleLightModeButton.addEventListener('click', () => {
        if (toggleLightModeButton.value === 'off') {
            body.style = 'background-color: white;'
            toggleLightModeButton.value = 'on'
        }
        else {
            body.style = 'background.color:rgb(42, 42, 42);';
            toggleLightModeButton.value = 'off'
        }
    })
}