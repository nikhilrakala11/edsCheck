async function fetchArticleText() {
  const url = 'http://localhost:4502/bin/vijaya';

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

export default fetchArticleText;


// async function fetchArticleText(articleNumber) {
//   const url = `localhost:4502/bin/abc.json`;

//   try {
//     const username = 'admin';
//     const password = 'admin';

//     const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: authHeader,
//       },
//     });
//     if (!response.ok) return null;

//     const json = await response.json();
//     console.log(json);

//     return {
//       title: json.title || 'View Article',
//       desc: json.desc || 'No Article Found.',
//     };
//   } catch (e) {
//     console.error(`Failed to fetch article ${articleNumber}`, e);
//     return '';
//   }
// }