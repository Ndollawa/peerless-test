export const getCurrentDate = (locale: string | undefined = undefined) => {
  const date = new Date();

  const day = new Intl.DateTimeFormat(locale, { weekday: "long" }).format(date); // 'undefined' automatically detects locale
  const dayOfMonth = date.getDate();
  const month = new Intl.DateTimeFormat(locale, { month: "short" }).format(
    date
  );

  // Auto-detecting local time zone
  const options: any = {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // 12-hour format with am/pm
    timeZoneName: "short", // Shows the time zone abbreviation
  };

  const timeString = new Intl.DateTimeFormat(locale, options).format(date); // Auto-detecting the time zone

  return `${day}, ${dayOfMonth} ${month} • ${timeString}`;
};
