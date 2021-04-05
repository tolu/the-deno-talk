export type Example = { name: string, ex: () => void };

const examples: Example[] = [];
export const addExample = (name: string, ex: Example['ex']) => {
  examples.push({name: `${examples.length + 1}. ${name}`, ex});
}

export const runExamples = async () => {
  if (examples.length === 0) {
    console.log('No examples added...');
    return;
  }
  const exampleNr = await prompt(`
  Select example:
  \t${examples.map(e => e.name).join('\n\t')}
  `) || '1';
  console.log('\n---------------------\n');
  await examples[parseFloat(exampleNr) - 1].ex();
}