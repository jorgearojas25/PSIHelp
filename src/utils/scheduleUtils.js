import moment from 'moment';
import config from '../config';

const getWeekDays = (userSchedule, docSchedule) => {
  let week = Array(5)
    .fill({}, 0, 5)
    .map((x, i) => {
      let today = moment();
      const day = today.add(i, 'd');
      const isToday = moment().get('D') === day.get('D');
      const fecha = day.format('ddd, D MMM');
      const hora = day.get('h');

      const horas = isToday
        ? [...config.SCHEDULE]
            .reverse()
            .splice(0, hora - 9)
            .reverse()
        : [...config.SCHEDULE];
      return {Fecha: fecha, Horas: horas};
    });

  if (userSchedule) {
    week.map(day =>
      userSchedule.find(
        sche => sche.Fecha === day.Fecha && day.Horas.includes(sche.Hora),
      )
        ? {...day}
        : {...day},
    );
  }

  if (docSchedule) {
    week.map(day =>
      docSchedule.find(
        sche => sche.Fecha === day.Fecha && day.Horas.includes(sche.Hora),
      )
        ? {...day}
        : {...day},
    );
  }

  console.log(week);

  return week;
};

export default {getWeekDays};
