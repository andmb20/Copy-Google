const imageLampshade = document.querySelector(".image--lampshade");
const body = document.body;

// Verifica se há preferência salva no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    updateLampshadeIcon(true);
}

// Alterna entre temas
imageLampshade.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle('dark-mode');

    // Salva a preferência
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Atualiza o ícone
    updateLampshadeIcon(isDarkMode);
});

// Função para atualizar o ícone do lampshade
function updateLampshadeIcon(isDarkMode) {
    const img = imageLampshade.querySelector('img');
    img.src = isDarkMode ?
        "assets/img/lamp.png" :
        "assets/img/lampshade-white.png";
    img.alt = isDarkMode ? "Light mode" : "Dark mode";

    const appsIcon = document.querySelector('.apps--png');
    appsIcon.src = isDarkMode ?
        "assets/img/apps-white.png" :
        "assets/img/apps.png";
}