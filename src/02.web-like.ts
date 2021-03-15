// deno run --allow-net src/02.web-like.ts
const examples: { name: string, ex: () => void }[] = [];
const add = (name: string, ex: () => void) => examples.push({name, ex});






add('1. Event Listeners, instead of EventEmitter-interface',
() => {
  addEventListener('unload', () => console.log('unloading...'));
  addEventListener('custom', () => console.log('on custom event...'));
  dispatchEvent( new Event('custom') );
})







add('2. Base-64',
() => {
  const base64String = btoa('log some string...');
  console.log(atob(base64String));
});








add('3. fetch',
async () => {
  const response = await fetch('https://httpbin.org/headers');
  const json = await response.json();
  console.log({json});
});








add('4. Confirm, prompt, alert',
() => {
  if (confirm('Svar på noe!')) {
    const selected = prompt('Ka vel du ha?', 'banos!');
    alert( `Du velle ha ${selected} 🎉`);
  }
});








add('5. self === window === globalThis',
  () => console.log(self)
);







// ignite!
const runExample = prompt(`
Select example:
\t${examples.map(e => e.name).join('\n\t')}
`) || '1';
console.log('\n---------------------\n');
examples[parseFloat(runExample) - 1].ex();