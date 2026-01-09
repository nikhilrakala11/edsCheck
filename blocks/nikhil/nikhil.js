// export default function decorate(block) {
//   console.log('NIKHIL BLOCK:', block);
//   console.log('CHILDREN:', block.children);

//   [...block.children].forEach((row, i) => {
//     console.log(`ROW ${i}:`, row.innerHTML);
//   });
// }
export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach(row => {
    const img = row.querySelector('img');
    const alt = img?.alt;
    console.log(alt);
  });
}

