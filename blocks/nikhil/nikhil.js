async function fetchArticleText() {
  const url = 'http://localhost:4502/bin/fetchchoices';

  try {
    console.log('Calling servlet:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response status:', response.status);

    if (!response.ok) return null;

    const json = await response.json();
    console.log('Servlet response JSON:', json);

    return {
      title: json.title || 'View Article',
      desc: json.desc || 'No Article Found.',
    };
  } catch (e) {
    console.error('Failed to fetch article', e);
    return '';
  }
}
