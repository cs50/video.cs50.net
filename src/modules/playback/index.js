import { Template, Fragment, Bind, Render } from '../../../lib';

// Import template and behaviors
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
    .then(frag => Bind('button')('click')(behavior.adjustSpeed)(frag))
    .then(frag => Render(dest)(frag));
  },
};
