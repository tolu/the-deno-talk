import { runExamples, addExample } from './utils/runner.ts';

addExample('lifecycle', () => {
  console.log('log before declarations.');
  addEventListener('load', (e: Event) => console.log(`on "${e.type}"...`));
  addEventListener('unload', (e: Event) => console.log(`on "${e.type}"...`));
  window.onload = (e: Event) => console.log(`window.on "${e.type}"...`);
  window.onunload = (e: Event) => console.log(`window.on "${e.type}"...`);
  console.log('log after declarations.');
});









addExample('permissions api', async () => {
  // query permission
  const desc1 = { name: "net" } as const;
  console.log(desc1, await Deno.permissions.query(desc1));
  
  // request permission
  const status1 = await Deno.permissions.request(desc1);
  console.log(desc1, status1);

  // make request
  console.log(await (await fetch('https://httpbin.org/headers')).json());
});









addExample('location api', () => {
  console.log(location.href);
  // deno run --location https://example.com/path src/03.runtime.ts
});







// TODO: https://deno.land/manual@v1.8.3/runtime/workers
// addExample('workers', () => {
// });







// GO!
runExamples();