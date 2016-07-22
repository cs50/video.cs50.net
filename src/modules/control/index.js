import { Template, Fragment, Bind, Render } from '../../../lib';

import template from './template';
import behavior from './behavior';

export default {
  init(dest, ops) {
    // Template with any options
    // Turn each template string into a document fragment
    // Bind user event listeners to children
    // Render fragments out to the destination node
    return Template(template)(ops)
    .then(html => Fragment(html))
    .then(frag => Bind('.seek-back')('click')(behavior.seekBy)(frag))
    .then(frag => Bind('.play-pause')('click')(behavior.playPause)(frag))
    .then(frag => Bind('.seek-next')('click')(behavior.seekNext)(frag))
    .then(frag => Bind('input')('keyup')(behavior.filterChapters)(frag))
    .then(frag => Render(dest)(frag));
  },
};
