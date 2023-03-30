function time() {
    // Create a new Date object and set its timezone to India
const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

// Extract the hours, minutes, and am/pm indicator from the date string
const [date, time] = now.split(", ");
const [hours, minutes] = time.split(":").slice(0, 2);
const ampm = hours >= 12 ? "pm" : "am";

// Convert the hours to 12-hour format
const hours12 = hours % 12 || 12;

// Display the current time in India in hours, minutes, and am/pm format
var t = hours12 + ":" +  minutes;

return [t,ampm];
}

function daysUntilBirthday(birthday = "2002-03-08") {
    // Parse the birthday string into a Date object
    const bday = new Date(birthday);
  
    // Get the current date
    const today = new Date();
  
    // Set the year of the birthday to the current year
    bday.setFullYear(today.getFullYear());
  
    // If the birthday has already passed this year, set it to next year
    if (bday.getTime() < today.getTime()) {
      bday.setFullYear(today.getFullYear() + 1);
    }
  
    // Calculate the number of days until the next birthday
    const diffTime = Math.abs(bday.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    // Return the number of days
    return diffDays;
  }

export {daysUntilBirthday , time}

