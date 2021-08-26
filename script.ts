const app = new (class {
  htmlElements = {
    musicContainer: <HTMLDivElement>document.getElementById("music-container"),
    playButton: <HTMLButtonElement>document.getElementById("play"),
    previousButton: <HTMLButtonElement>document.getElementById("prev"),
    nextButton: <HTMLButtonElement>document.getElementById("next"),
    audio: <HTMLAudioElement>document.getElementById("audio"),
    progress: <HTMLDivElement>document.getElementById("progress"),
    progressContainer: <HTMLDivElement>(
      document.getElementById("progress-container")
    ),
    title: <HTMLHeadingElement>document.getElementById("title"),
    cover: <HTMLImageElement>document.getElementById("cover"),
  };
})();
