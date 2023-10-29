export default defineEventHandler(async (event) => {
  const number = event.context.params.number;
  const type = event.context.params.type;
  const url = "http://numbersapi.com/";
  const res = await $fetch(url + number + "/" + type);
  
  return res;
})
