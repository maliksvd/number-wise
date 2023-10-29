export default defineEventHandler(async (event) => {
  const number = event.context.params.number;
  const url = "http://numbersapi.com/";
  const res = await $fetch(url + number);
  
  return res;
})
