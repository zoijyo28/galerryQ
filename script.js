// Filter Galeri
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.item');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Hapus aktif
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.opacity = '1';
          item.style.pointerEvents = 'auto';
          setTimeout(() => {
            item.style.display = 'block';
          }, 100);
        } else {
          item.style.opacity = '0';
          item.style.pointerEvents = 'none';
          setTimeout(() => {
            item.style.display = filter === 'all' ? 'block' : 'none';
          }, 300);
        }
      });
    });
  });
});
