async function fetchArticleText() {
  const url = 'http://localhost:4502/bin/vijaya.json';

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
