

const currentDate = new Date();

const yearsJumped = 30 * 12 * 30;
const newDate = currentDate.setDate(currentDate.getDate() + yearsJumped)
console.log(new Date(newDate))