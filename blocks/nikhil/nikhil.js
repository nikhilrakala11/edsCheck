export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  rows.forEach((row) => {
    const cols = [...row.children];

    const image =
      cols[0]?.querySelector('a')?.href ||
      cols[0]?.textContent?.trim();

    const alt = cols[1]?.textContent?.trim() || '';

    if (image) {
      const img = document.createElement('img');
      img.src = image;
      img.alt = alt;
      block.appendChild(img);
    }
  });
}
