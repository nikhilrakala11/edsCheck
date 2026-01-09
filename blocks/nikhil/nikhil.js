export default function decorate(block) {
  console.log('NIKHIL BLOCK:', block);
  console.log('CHILDREN:', block.children);

  [...block.children].forEach((row, i) => {
    console.log(`ROW ${i}:`, row.innerHTML);
  });
}
