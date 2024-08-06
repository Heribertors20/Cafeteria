    // Código para mostrar el iziToast al cargar la página
    document.addEventListener('DOMContentLoaded', function() {
        iziToast.show({
            title: 'Aviso',
            message: 'Presiona sobre la imagen para más información',
            position: 'topRight',
            timeout: 3000,
            color: 'blue',
            icon: 'bi bi-info-circle',
        });
    });