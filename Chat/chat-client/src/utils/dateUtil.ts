import moment from "moment";

export function linkedinFormattedDate(timestamp: string | number) {
  const now = moment();
  const duration = moment.duration(now.diff(+timestamp));
  console.log({ passedDate: new Date(timestamp), duration });
  const minutes = duration.asMinutes();
  const hours = duration.asHours();
  const days = duration.asDays();
  const weeks = duration.asWeeks();
  const years = duration.asYears();

  if (minutes < 60) {
    return `${Math.round(minutes)}m`;
  } else if (hours < 24) {
    return `${Math.round(hours)}h`;
  } else if (days < 7) {
    return `${Math.round(days)}d`;
  } else if (weeks < 52) {
    return `${Math.round(weeks)}w`;
  } else {
    return `${Math.round(years)}y`;
  }
}

export function formattedDate(timestamp: string | number) {
  return moment(+timestamp).format("DD/MM/YYYY");
}
