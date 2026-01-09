async function fetchArticleText() {
  const url = 'http://localhost:4502/api/fetchchoices';

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('API call failed');
  }

  return response.json();
}

export default async function decorate(block) {
  // Optional: clear authored placeholder content
  block.innerHTML = '<p>Loading...</p>';

  try {
    const data = await fetchArticleText();

    // Create markup
    const wrapper = document.createElement('div');
    wrapper.className = 'article-wrapper';

    const title = document.createElement('h3');
    title.textContent = data.title;

    const desc = document.createElement('p');
    desc.textContent = data.desc;

    wrapper.append(title, desc);

    // Replace block content
    block.innerHTML = '';
    block.append(wrapper);
  } catch (e) {
    block.innerHTML = '<p>Failed to load article.</p>';
    console.error(e);
  }
}
