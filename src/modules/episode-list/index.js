import { subscribe, publish } from 'minpubsub';

export default {
  render(selector, data) {
    const active = parseFloat(window.location.pathname.split('/')[2]) || 0;
    // Clear container element
    const container = document.querySelector(selector);
    const fragment = document.createDocumentFragment();
    container.innerHTML = '';
    // For each episode
    data.forEach(model => {
      const $episode = document.createElement('episode-');
      $episode.innerHTML = `${model.year} | Episode ${model.episode}`;
      $episode.setAttribute('order', model.episode);
      if (model.episode === active) {
        $episode.classList.add('active');
      }
      $episode.addEventListener('click', (e) => {
        // Remove active class from all episodes
        [...e.currentTarget.parentNode.children]
        .forEach(x => x.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const id = e.currentTarget.getAttribute('order');
        window.history.pushState({}, '', `/2015/${id}`);
        publish('player:loadVideo', [id]);
      });
      fragment.appendChild($episode);
    });

    const $prev = document.createElement('button');
    $prev.innerHTML = '<svg viewBox="0 0 1 1"><use xlink:href="#icon-prev"></use></svg>';
    $prev.addEventListener('click', (e) => {
      const current = [...e.currentTarget.parentNode.children]
      .find(x => x.classList.contains('active'));
      const id = parseFloat(current.getAttribute('order')) - 1;
      window.history.pushState({}, '', `/2015/${id}`);
      publish('player:loadVideo', [id]);
    });
    fragment.appendChild($prev);

    const $next = document.createElement('button');
    $next.innerHTML = '<svg viewBox="0 0 1 1"><use xlink:href="#icon-next"></use></svg>';
    $next.addEventListener('click', (e) => {
      const current = [...e.currentTarget.parentNode.children]
      .find(x => x.classList.contains('active'));
      const id = parseFloat(current.getAttribute('order')) + 1;
      window.history.pushState({}, '', `/2015/${id}`);
      publish('player:loadVideo', [id]);
    });
    fragment.appendChild($next);

    subscribe('player:loadVideo', id => {
      // Remove active class from all episodes
      [...document.querySelectorAll('episode-')]
      .forEach(x => x.classList.remove('active'));
      // Add active class to the loaded episode
      document.querySelector(`episode-[order="${id}"]`).classList.add('active');
    });

    container.appendChild(fragment);
  },
};
