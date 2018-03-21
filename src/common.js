const DAY_HOURS = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Des'];
const LINKS = [
  {name: 'year',
    description: 'Add tasks to months.'
  }, {
    name: 'current month',
    description: 'Add tasks to current month.'
  }, {
    name: 'week',
    description: 'Add tasks to days.'
  }, {
    name: 'custom task',
    description: 'Split custom task to subtasks.'
  }
];
const KEY_CODES = {
  ESC: 27,
  ENTER: 13,
  SPACE: 32
};

const dateWork = () => {
  const now = new Date();
  const dayIndex = now.getDay() === 0 ? 6 : now.getDay() === 6 ? 5 : now.getDay() - 1;
  return {
    year: now.getFullYear(),
    month: MONTH[now.getMonth()],
    dayIndex,
    day: WEEK[dayIndex],
    date: now.getDate()
  }
};


export {
  DAY_HOURS,
  KEY_CODES,
  WEEK,
  MONTH,
  LINKS,
  dateWork
}