export default model =>
`<input type="text" placeholder="Search Video.." data-target="${model.target}" />
<svg viewBox="0 0 1 1"><use xlink:href="#icon-search"></use></svg>
<button class="seek-back">
  <svg viewBox="0 0 1 1"><use xlink:href="#icon-history"></use></svg>
</button>
<button class="seek-next">
  <svg viewBox="0 0 1 1"><use xlink:href="#icon-forward"></use></svg>
</button>`;
