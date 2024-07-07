import { createWorker } from "tesseract.js";

export default async function imageRecognitionWorker(image) {
  const worker = await createWorker('eng');
  const ret = await worker.recognize(`assets/images/${image}`);
  await worker.terminate();
  return ret.data.text;
}