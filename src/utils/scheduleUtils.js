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
            .splice(0, hora - 15)
            .reverse()
        : [...config.SCHEDULE];
      return {Fecha: fecha, Horas: horas};
    });

  if (userSchedule) {
    let thisArray = [];

    week.forEach(day =>
      thisArray.push({
        ...day,
        Horas: day.Horas.map(hora => ({
          ...hora,
          Bloqueado: userSchedule.some(
            sch => sch.Fecha === day.Fecha && sch.Hora === hora.hora,
          ),
        })),
      }),
    );

    week = thisArray;
  }

  if (docSchedule) {
    let thisArray = [];

    week.forEach(day =>
      thisArray.push({
        ...day,
        Horas: day.Horas.map(hora => ({
          ...hora,
          Bloqueado: docSchedule.some(
            sch => sch.Fecha === day.Fecha && sch.Hora === hora.hora,
          ),
        })),
      }),
    );

    week = thisArray;
  }

  return week;
};

export default {getWeekDays};
