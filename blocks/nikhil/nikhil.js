async function fetchArticleText() {
  const url = 'http://localhost:4502/bin/fetchchoices';

  const response = await fetch(url);
  return response.json();
}

export default function decorate(block) {
  fetchArticleText().then(console.log);
}
