export default function dateFormat(unix_timestamp) {
  const date = new Date(unix_timestamp * 1000);
  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  const month = months[date.getMonth()];
  const newDate = date.getDate();
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();

  const formattedDate = `${newDate}/${month}`;
  const formattedTime = `${hours}:${minutes.substr(-2)} `;

  return { formattedDate, formattedTime };
}
