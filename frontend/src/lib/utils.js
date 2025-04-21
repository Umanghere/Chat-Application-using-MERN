// USE THIS IF YOU WANT TO DISPLAY TIME ONLY 
export function formatMessageTime(date) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}


// USE THIS IF YOU WANT TO DISPLAY DATE AND TIME 
// export function formatMessageTime(date) {
//   return new Date(date).toLocaleString("en-US", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });
// }
