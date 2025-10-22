// import { formatDistance, parseISO } from "date-fns";
// import { differenceInDays } from "date-fns";

// // We want to make this function work for both Date objects and strings (which come from Supabase)
// export const subtractDates = (dateStr1, dateStr2) =>
//   differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

// export const formatDistanceFromNow = (dateStr) =>
//   formatDistance(parseISO(dateStr), new Date(), {
//     addSuffix: true,
//   })
//     .replace("about ", "")
//     .replace("in", "In");

// // Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
// export const getToday = function (options = {}) {
//   const today = new Date();

//   // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
//   if (options?.end)
//     // Set to the last second of the day
//     today.setUTCHours(23, 59, 59, 999);
//   else today.setUTCHours(0, 0, 0, 0);
//   return today.toISOString();
// };

// export const formatCurrency = (value) =>
//   new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
//     value
//   );
import { formatDistance, parseISO, isDate } from "date-fns";
import { differenceInDays } from "date-fns";

// ✅ Works with both Date objects and strings
export const subtractDates = (dateStr1, dateStr2) => {
  if (!dateStr1 || !dateStr2) return 0;

  const d1 = isDate(dateStr1) ? dateStr1 : parseISO(String(dateStr1));
  const d2 = isDate(dateStr2) ? dateStr2 : parseISO(String(dateStr2));

  return differenceInDays(d1, d2);
};

// ✅ Works even if dateStr is already a Date, null, or invalid
export const formatDistanceFromNow = (dateStr) => {
  if (!dateStr) return "Unknown date";

  const date = isDate(dateStr) ? dateStr : parseISO(String(dateStr));
  if (isNaN(date)) return "Invalid date";

  return formatDistance(date, new Date(), { addSuffix: true })
    .replace("about ", "")
    .replace("in", "In");
};

// ✅ Returns today's ISO string (start or end of day)
export const getToday = function (options = {}) {
  const today = new Date();

  if (options?.end) today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);

  return today.toISOString();
};

// ✅ Safe currency formatter
export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value ?? 0);
