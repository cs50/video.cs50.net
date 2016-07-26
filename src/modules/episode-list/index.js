import { subscribe, publish } from 'minpubsub';

export default {
  render(selector, data) {
    const active = parseFloat(window.location.pathname.split('/')[2]);
    // Clear container element
    const container = document.querySelector(selector);
    const fragment = document.createDocumentFragment();
    container.innerHTML = '';
    // For each episode
    data.forEach(model => {
      const $episode = document.createElement('episode-');
      $episode.innerHTML = model.episode;
      $episode.setAttribute('id', model.episode);
      if (model.episode === active) {
        $episode.classList.add('active');
      }
      $episode.addEventListener('click', (e) => {
        [...e.currentTarget.parentNode.children]
        .forEach(x => x.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const id = e.currentTarget.getAttribute('id');
        // loadEpisode(episode[id], player);
        publish('player:loadVideo', [id]);
        window.history.replaceState({}, '', e.currentTarget.getAttribute('id'));
      });
      fragment.appendChild($episode);
    });
    container.appendChild(fragment);
  },
};
