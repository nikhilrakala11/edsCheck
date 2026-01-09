async function fetchArticleText() {
    const url = 'http://localhost:4502/bin/fetchchoices';

    const response = await fetch(url, {
        credentials: 'same-origin', // IMPORTANT for AEM
        headers: {
            'Accept': 'application/json'
        }
    });
    console.log(response,"ooooooooooooooooooooooooooooooo");
    console.log(response.status);
    console.log(response.status);

    // if (!response.ok) {
    //     throw new Error(`API failed: ${response.status}`);
    // }

    const text = await response.json(); // ✅ read raw text first
    console.log(text);

    // if (!text) {
    //     throw new Error('Empty response from servlet');
    // }

    return JSON.parse(text); // ✅ safe parse
}

export default async function decorate(block) {
    block.innerHTML = '<p>Loading...</p>';

    try {
        const data = await fetchArticleText();
        console.log('Servlet data:', data);

        const wrapper = document.createElement('div');
        wrapper.className = 'article-wrapper';

        const title = document.createElement('h3');
        title.textContent = data.title || 'No title';

        const desc = document.createElement('p');
        desc.textContent = data.desc || 'No description';

        wrapper.append(title, desc);
        block.replaceChildren(wrapper);
    } catch (e) {
        console.error(e);
        block.innerHTML = '<p>Failed to load article.</p>';
    }
}
