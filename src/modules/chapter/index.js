import { Fetch, Template, Fragment, Bind, Render, Event } from '../../../lib';

// Import component template and behavior
import template from './template';
import behavior from './behavior';

export default {
  init(dest, resource) {
    // Fetch the resource document
    // Run each item through the template
    // Turn each template string into a document fragment
    // Bind user event listeners to children
    // Render fragments out to the destination node
    // Select all rendered nodes
    // Subscribe to internal events
    return Fetch(resource)
      .then(json => Template(template)(json))
      .then(html => Fragment(html))
      .then(frag => Bind('header')('click')(behavior.seekTo)(frag))
      .then(frag => Bind('phrase-')('click')(behavior.seekToPhrase)(frag))
      .then(frag => Render(dest)(frag))
      .then(() => [...document.querySelector(dest).childNodes])
      .then(elem => Event('video:tick')(behavior.update)(elem))
      .then(elem => Event('chapter:next')(behavior.seekNext)(elem));
  },
};