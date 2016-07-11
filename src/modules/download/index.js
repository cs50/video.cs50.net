import { Template, Fragment, Render } from '../../../lib';
import template from './template';

export default {
  init(dest, ops) {
    return Template(template)(ops)
    .then(html => Fragment(html))
    .then(frag => Render(dest)(frag));
  },
};
