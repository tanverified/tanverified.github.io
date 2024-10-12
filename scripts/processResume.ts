import readline from 'readline/promises';
import { writeFile } from 'fs/promises';
import { Resume } from 'src/types/Resume';
import resumeJson from 'data/resume.json';

const resume = resumeJson as Resume;

async function prompt(msg: string, def?: string) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const txt = def ? ` [${def}]` : '';
  const res = await rl.question(`${msg}${txt}: `);
  rl.close();
  return res || def || '';
}

async function getTTS(text: string, outputPath: string) {
  text = encodeURIComponent(text);
  const lang = await prompt('Lang code for tts', 'en-us');
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${lang}&q=${text}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to download file: ${res.statusText}`);
    return;
  }
  const arrBuf = await res.arrayBuffer();
  const buffer = Buffer.from(arrBuf);
  await writeFile(outputPath, buffer);
}

await getTTS(resume.basics.name, 'data/tts.mp3');
