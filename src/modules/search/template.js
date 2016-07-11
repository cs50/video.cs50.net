export default model =>
`<input type="text" placeholder="Search"
  data-target="${model.target}" />
  <button class="seek-back">
    <svg viewBox="0 0 1 1"><use xlink:href="#icon-history"></use></svg>
  </button>
  <button class="seek-next">
    <svg viewBox="0 0 1 1"><use xlink:href="#icon-forward"></use></svg>
  </button>`;
