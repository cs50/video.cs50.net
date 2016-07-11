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

export default (model = {}) =>
`<chapter-
  data-title="${model.title}"
  data-start="${seconds(model.start)}"
  data-end="${seconds(model.end)}" style="flex:${duration(model.start, model.end)}">
  <subtitles->
    ${model.subtitles.map(x =>
      `<phrase-
        data-start="${seconds(x.start)}"
        data-end="${seconds(x.end)}">
        <p>${x.phrase}</p>
      </phrase->`
    ).join('')}
  </subtitles->
</chapter->`;
