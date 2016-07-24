import moment from 'moment';

// Convert time from the format 00:00:00.000
// into number of seconds
const seconds = time => {
  const hms = time.split(':').map(x => parseFloat(x));
  return (hms[0] * 60 * 60) + (hms[1] * 60) + hms[2];
};

// Work out the time between two points
// that have the format 00:00:00.000
const duration = (start, end) =>
  moment(end, 'hh:mm:ss.SSS')
  .diff(moment(start, 'hh:mm:ss.SSS'), 'minutes');

// Convert time from the format 00:00:00.000
// into minutes and seconds in the format 00:00
const mins = time =>
  time.substring(0, time.length - 4)
  .substring(3);

export default (model = {}) =>
`<chapter-
  data-title="${model.title}"
  data-start="${seconds(model.start)}"
  data-end="${seconds(model.end)}">
  <header>
    <div>
      <h1>${mins(model.start)} ${model.title}</h1>
      <h2>${duration(model.start, model.end)} min | ${model.id}</h2>
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
