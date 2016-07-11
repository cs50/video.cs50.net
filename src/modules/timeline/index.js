import { Fetch, Template, Fragment, Bind, Render, Event } from '../../../lib';

import template from './template';
import behavior from './behavior';

export default {
  init(dest, resource) {
    return Fetch(resource)
      .then(json => Template(template)(json))
      .then(html => Fragment(html))
      .then(frag => Bind('phrase-')('click')(behavior.seekToPhrase)(frag))
      .then(frag => Render(dest)(frag))
      .then(() => [...document.querySelector(dest).childNodes])
      .then(elem => Event('video:tick')(behavior.update)(elem))
      .then(elem => Event('chapter:next')(behavior.seekNext)(elem));
  },
};
