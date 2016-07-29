export default {
  render(selector, data) {
    const container = document.querySelector(selector);
    container.innerHTML = '';
    const frag = document.createDocumentFragment();
    const title = document.createElement('h1');
    title.innerHTML = '<span>Download</span><svg viewBox="0 0 1 1"><use xlink:href="#icon-download"></use></svg>';
    frag.appendChild(title);
    Object.keys(data).forEach(key => {
      const elem = document.createElement('a');
      elem.innerHTML = `${key}p`;
      elem.href = data[key];
      elem.setAttribute('download', 'true');
      frag.appendChild(elem);
    });
    container.appendChild(frag);
  },
};
