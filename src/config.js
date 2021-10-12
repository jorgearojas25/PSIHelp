const config = {
  API_URI: 'https://psi-help.herokuapp.com',
  SERVICES: {
    especialidad: '/especialidad/',
    usuario: '/usuario/',
    doctor: '/doctor/',
    metodoPago: '/metodopago/',
    agenda: '/agenda/',
    login: '/usuario/filter',
    filter: '/usuario/filter',
    agendaFilter: '/agenda/filter',
  },
  CARD_TYPES: {large: 'CARD_LARGE', small: 'CARD_SMALL', full: 'CARD_FULL'},
  SCHEDULE: [
    {hora: '8:00 AM', Bloqueado: false},
    {hora: '9:00 AM', Bloqueado: false},
    {hora: '10:00 AM', Bloqueado: false},
    {hora: '11:00 AM', Bloqueado: false},
    {hora: '12:00 M', Bloqueado: false},
    {hora: '1:00 PM', Bloqueado: false},
    {hora: '2:00 PM', Bloqueado: false},
    {hora: '3:00 PM', Bloqueado: false},
    {hora: '4:00 PM', Bloqueado: false},
    {hora: '5:00 PM', Bloqueado: false},
  ],
};

export default config;
