import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const actions = {
  toggle(e) {
    document.body.setAttribute('breaks', e.target.checked);
    [...document.querySelectorAll('break-toggle input')]
    .forEach(x => x.checked = e.target.checked);
  }
}

export default () => {
  const $container = document.createElement('break-toggle');
  const breaks = document.body.getAttribute('breaks') === 'true' ? true : false;

  Fetch([{ checked: breaks }])
  .then(Node(({checked}) => `
    <label>
      <input type="checkbox" ${ checked ? 'checked' : '' } />
      <span>Breaks between chapters</span>
    </label>
  `))
  .then(Bind('input')('click')(actions.toggle))
  .then(Draw($container));

  return $container;
}
