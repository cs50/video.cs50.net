import moment from 'moment';

const seconds = time => {
  const hms = time.split(':').map(x => parseFloat(x));
  return (hms[0] * 60 * 60) + (hms[1] * 60) + hms[2];
};

const duration = (start, end) =>
  moment(end, 'hh:mm:ss.SSS')
  .diff(moment(start, 'hh:mm:ss.SSS'), 'minutes');

const mins = time =>
  time.substring(0, time.length - 4)
  .substring(3);

const offset = url => {
  const regex = /#xywh=0,(.\d+?|0),/;
  const num = regex.exec(url)[1] / 90;
  return num * 9;
};

export default (model = {}) =>
`<chapter-
  data-title="${model.title}"
  data-start="${seconds(model.start)}"
  data-end="${seconds(model.end)}">
  <header>
    <svg viewBox="0 0 3 2" style="background-image:url(${model.thumb});
      background-position:center ${offset(model.thumb)}%"></svg>
    <div>
      <h1>${model.title}</h1>
      <h2>${duration(model.start, model.end)} min | Chapter ${model.id}</h2>
    </div>
  </header>
  <subtitles->
    ${model.subtitles.map(x =>
      `<phrase- data-start="${seconds(x.start)}" data-end="${seconds(x.end)}">
        <span>${mins(x.start)}</span>
        <p>${x.phrase}</p>
      </phrase->`
    ).join('')}
  </subtitles->
</chapter->`;

// ${model.intro ? `<p>${model.intro}</p>` : ''}
