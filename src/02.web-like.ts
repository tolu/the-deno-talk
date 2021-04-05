// deno run --allow-net src/02.web-like.ts
import { runExamples, addExample } from './utils/runner.ts';






addExample('Event Listeners, instead of EventEmitter-interface',
() => {
  addEventListener('unload', () => console.log('unloading...'));
  addEventListener('custom', () => console.log('on custom event...'));
  dispatchEvent( new Event('custom') );
})







addExample('Base-64',
() => {
  const base64String = btoa('log some string...');
  console.log(atob(base64String));
});








addExample('fetch',
async () => {
  const response = await fetch('https://httpbin.org/headers');
  const json = await response.json();
  console.log({json});
});








addExample('Confirm, prompt, alert',
() => {
  if (confirm('Svar på noe!')) {
    const selected = prompt('Ka vel du ha?', 'banos!');
    alert( `Du velle ha ${selected} 🎉`);
  }
});








addExample('self === window === globalThis',
  () => console.log(self)
);









addExample('6. wasm',
() => {
  const wasmCode = new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127,
    3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0,
    5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145,
    128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97,
    105, 110, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0,
    65, 42, 11
  ]);
  const wasmModule = new WebAssembly.Module(wasmCode);
  const wasmInstance = new WebAssembly.Instance(wasmModule);
  const main = wasmInstance.exports.main as CallableFunction
  console.log(main().toString());
});







// ignite
runExamples();