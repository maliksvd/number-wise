export default defineEventHandler(async (event: any) => {
  const number: string = event.context.params.number;
  const url: string = "http://numbersapi.com/";
  const res: Response = await fetch(url + number);
  
  return res;
})
