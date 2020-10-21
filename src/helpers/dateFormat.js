export default function dateFormat(unix_timestamp) {
  const date = new Date(unix_timestamp * 1000);
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();
  const formattedTime = `${hours}:${minutes.substr(-2)} `;

  return formattedTime;
}
