import { subscribe } from 'minpubsub';

const Fetch = uri =>
  (typeof uri === 'string' ?
    fetch(`${window.location.origin}${uri}`, { method: 'get' })
      .then(response => response.json())
      : new Promise(resolve => resolve(uri)));

const Template = model => data =>
  new Promise(resolve =>
    resolve(data.map(model)));

const Render = elem => frag =>
  new Promise(resolve =>
    resolve(frag.map(x =>
      document.querySelector(elem).appendChild(x))));

const Fragment = html =>
  new Promise(resolve =>
    resolve(html.map(x =>
      document.createRange().createContextualFragment(x))));

const Bind = elem => evnt => func => frag =>
  new Promise(resolve =>
    resolve(frag.map(x =>
      ([...x.querySelectorAll(elem)].map(y => y.addEventListener(evnt, func)) ? x : x))));

const Event = sub => func => frag =>
  new Promise(resolve =>
    resolve(frag.map(x =>
      (subscribe(sub, (...args) => func.apply(x, args)) ? x : x))));


export {
  Fetch,
  Template,
  Render,
  Fragment,
  Bind,
  Event,
};
