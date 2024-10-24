document.getElementById('openPdfLink').addEventListener('click', function(event) {
    event.preventDefault(); // запобігти переходу за посиланням

    // Виклик API для генерації PDF
    fetch('/generate-pdf')
        .then(response => {
            if (response.ok) {
                // Після успішної генерації відкриваємо PDF
                window.open('/pdfs/page.pdf', '_blank');
            } else {
                alert('PDF generation failed. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error generating PDF:', error);
            alert('An error occurred while generating PDF.');
        });
});