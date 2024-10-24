  document.getElementById('downloadPDF').addEventListener('click', function () {
    // Виберіть елемент, який потрібно конвертувати в PDF
    const element = document.body; // або document.querySelector("#yourElement");

    // Налаштуйте параметри PDF
    const opt = {
      margin:       1,
      filename:     'page.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // Виклик html2pdf для створення PDF
    html2pdf().from(element).set(opt).save();
  });
