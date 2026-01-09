async function fetchArticleText() 
{
  const API_URL = 'http://localhost:4502/new/a/fetchchoices';
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`API failed: ${response.status}`);
  }

  return response.json();
}