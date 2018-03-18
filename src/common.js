const DAY_HOURS = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Des'];
const LINKS = [
  {name: 'year',
    description: 'Add tasks to months.'
  }, {
    name: 'month',
    description: 'Add tasks to week.'
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
  return {
    year: now.getFullYear(),
    month: MONTH[now.getMonth()],
    dayIndex: now.getDay() === 0 ? 6 : now.getDay() === 6 ? 5 : now.getDay() - 1,
    day: WEEK[now.getDay() === 0 ? 6 : now.getDay() === 6 ? 5 : now.getDay() - 1],
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