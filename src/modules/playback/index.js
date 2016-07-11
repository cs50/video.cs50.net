import { Template, Fragment, Bind, Render } from '../../../lib';

import template from './template';
import behavior from './behavior';

export default {
  init(dest, ops) {
    return Template(template)(ops)
    .then(html => Fragment(html))
    .then(frag => Bind('button')('click')(behavior.adjustSpeed)(frag))
    .then(frag => Render(dest)(frag));
  },
};
