import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const action = {
  select(e) {
    publish('video:swapCamera', [this.data.type, this.data.state]);
    // Remove active class from other keys
    [...e.currentTarget.parentNode.children]
    .forEach(x => x.removeAttribute('active'));
    // Make this element active
    e.currentTarget.setAttribute('active', true);
  }
}

export default () => {
  const $container = document.createElement('experience-modes');
  const render = (state) =>
  Fetch([
    { icon:'videocam', type:'pr', active:true, state,
      hidden: !(state.main && ((state.cameras && state.screens) || state.vr)) },
    { icon:'featured-video', type:'ms', state,
      hidden: !(state.cameras && state.screens) },
    { icon:'vr', type:'vr', state,
      hidden: !(state.vr) },
  ])
  .then(Node(({icon,type,active,hidden}) => `
    <button ${ active ? 'active' : '' } ${ hidden ? 'hidden' : '' }>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-${icon}"></use></svg>
    </button>
  `))
  .then(Bind('button')('click')(action.select))
  .then(Draw($container));

  subscribe('youtube:fetched', render);
  return $container;
}
