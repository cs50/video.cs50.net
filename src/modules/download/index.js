import { Template, Fragment, Render } from '../../../lib';

// Import component template
import template from './template';

export default {
  init(dest, ops) {
    // Template with any options
    // Turn each template string into a document fragment
    // Render fragments out to the destination node
    return Template(template)(ops)
    .then(html => Fragment(html))
    .then(frag => Render(dest)(frag));
  },
};
