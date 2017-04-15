import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';
import { isMobile } from '../../helpers/document.js';
import { youTubeTimeFromUrl } from '../../helpers/youtube.js';

const action = {
  select(e) {
    const time = youTubeTimeFromUrl();
    const setMode = () => {
      // Remove active class from other keys
      [...e.currentTarget.parentNode.children]
      .forEach(x => x.removeAttribute('active'));
      // Make this element active
      e.currentTarget.setAttribute('active', true);
      // Set experience mode of body
      document.body.setAttribute('experience', this.data.type);
    }
    // Multiscreen experience mode
    if(this.data.type === 'ms') {
      publish('video:loadMainVideoById', [this.data.state.cameras, time]);
      publish('video:loadAltVideoById', [this.data.state.screens, time]);
      setMode();
    }
    // Production experience mode
    if(this.data.type === 'pr' || this.data.type === 'ex') {
      publish('video:loadMainVideoById', [this.data.state.main, time]);
      publish('video:hideAltVideo');
      setMode();
    }
    // Virtual reality experience mode
    if(this.data.type === 'vr') {
      if(!isMobile()) {
        publish('video:loadMainVideoById', [this.data.state.vr, time]);
        publish('video:hideAltVideo');
        setMode();
      } else {
        publish('video:pause')
        window.open(`https://youtube.com/watch/${this.data.state.vr}&t=${time}`, '_blank')
      }
    }
  }
};

export default () => {
  const $container = document.createElement('experience-modes');
  const render = (state) =>
  Fetch([
    { label: 'Main Cameras', icon:'videocam', type:'pr', active:true, state,
      hidden: !(state.main && ((state.cameras && state.screens) || state.vr)) },
    { label: 'Multi Screen', icon:'featured-video', type:'ms', state,
      hidden: !(state.cameras && state.screens) },
    { label: '360 Video', icon:'vr', type:'vr', state,
      hidden: !(state.vr) },
    { label: 'Explained', icon:'explained', type:'ex', state,
      hidden: !(state.explained) },
  ])
  .then(Node(({label,icon,type,active,hidden}) => `
    <button data-label='${label}' ${ active ? 'active' : '' } ${ hidden ? 'hidden' : '' }>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-${icon}"></use></svg>
    </button>
  `))
  .then(Bind('button')('click')(action.select))
  .then(Draw($container));

  subscribe('youtube:fetched', render);
  return $container;
};
