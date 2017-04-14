import { publish } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';
import { isMobile } from '../../helpers/document.js';

const action = {
  select(e) {
    publish('video:setPlaybackRate', [this.data.rate]);
    // Remove active class from other rates
    [...e.currentTarget.parentNode.children]
    .forEach(x => x.classList.remove('active'));
    // Make this rate active
    e.currentTarget.classList.add('active');
    window.ga('send', 'event', 'speed', 'changed', this.data.rate);
  }
}

export default () => {
  const $container = document.createElement('playback-rates');
  if(!isMobile()) {

    Fetch([
      { rate: 1, label: '1', active: true },
      { rate: 1.5, label: '3\u22152' },
      { rate: 2, label: '2' }
    ])
    .then(Node(({rate, label, active}) => `
      <button class='${ active ? 'active' : '' }' rate='${rate}' label='${label}'></button>
    `))
    .then(Bind('button')('click')(action.select))
    .then(Draw($container));

  }
  return $container;
}
