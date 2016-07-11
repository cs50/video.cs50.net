export default model =>
  `<a href='${model.href}' download='${model.name}'>Download</a>
  <svg viewBox="0 0 1 1"><use xlink:href="#icon-download"></use></svg>`;
