/*
    Objetos
        -console
        -navigator
        -location
            *propiedades
                -href (url actual, se puede cambiar para cambiar la página actual)
                -host (dominio:puerto)
                -hostname (dominio)
                -port (puerto)
                -protocol (protocolo: http, https)
                -origin (protocolo + dominio)
                -hash (#)
                -pathname (ruta interna luego del dominio)

            *métodos
                -reload()
                -assign(url)
                -replace(url) (cambia la url actual sin guardar en history)
        -history
        -screen

    Métodos
        -open()
        -close()
        -alert(msg)
        -confirm(msg)
        -prompt(msg)    */

const openPopupWindow = document.getElementById('openPopupWindow');

openPopupWindow.addEventListener('click', () => {
    window.open('https://www.google.com', 'Buscar ahora', 'width=400,height=500');
});

// location
console.log(`href: ${location.href}`);
console.log(`hostname: ${location.hostname}, port: ${location.port}, host: ${location.host}`);
document.getElementById('goToGoogle').addEventListener('click', () => {
    location.href = "http://www.google.com";
});


document.getElementById('btnReload').addEventListener('click', () => {
    location.reload();
});