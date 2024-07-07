import imageRecognitionWorker from "../../utils/tesseractworker.js";

export default async function defaultService() {
  const data = await imageRecognitionWorker('images.jpeg')
  return `<h1>${data}</h1>`;
}