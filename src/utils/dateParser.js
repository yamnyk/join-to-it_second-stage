export default function dateParser(date) {
  const dateArray = date.toString().split(' ');
  const year = date.getFullYear(),
    month = date.getMonth() < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1,
    day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  
  return {
    date: [year, month, day].join('-'),
    time: dateArray[4]
  }
}