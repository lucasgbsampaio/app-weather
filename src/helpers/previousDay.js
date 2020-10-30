export default function previousDay() {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  let dateMilli = String(date.getTime() / 1000);
  let formatted = dateMilli.slice(0, 10);
  return Number(formatted);
}
