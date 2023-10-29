export default defineEventHandler(async (event: any) => {
  const number: string = event.context.params.number;
  const type: string = event.context.params.type;
  const url: string = "http://numbersapi.com/";
  const res = await fetch(url + number + "/" + type);
  
  return res;
});
