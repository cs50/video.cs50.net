export default {
  render(selector, data) {
    const container = document.querySelector(selector);
    container.innerHTML = '';
    const frag = document.createDocumentFragment();
    const title = document.createElement('button');
    title.innerHTML = '<svg viewBox="0 0 1 1"><use xlink:href="#icon-download"></use></svg>';
    frag.appendChild(title);
    const div = document.createElement('div');
    data.forEach(resource => {
      const elem = document.createElement('a');
      elem.innerHTML = `${resource.label.replace('MP4 (', '').replace(')', '')}`;
      elem.href = resource.src;
      elem.setAttribute('download', 'true');
      div.appendChild(elem);
    });
    frag.appendChild(div);
    container.appendChild(frag);
  },
};
