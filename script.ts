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
  songs: string[] = ["hey", "summer", "ukulele"];
  songIndex: number = 2;

  constructor() {
    this.loadSong(this.songs[this.songIndex]);
    this.htmlElements.playButton.addEventListener("click", () => {
      const isPlaying =
        this.htmlElements.musicContainer.classList.contains("play");
      if (isPlaying) {
        this.pauseSong();
      } else {
        this.playSong();
      }
    });
  }

  loadSong(song: string) {
    this.htmlElements.title.innerText = song;
    this.htmlElements.audio.src = `music/${song}.mp3`;
    this.htmlElements.cover.src = `images/${song}.jpg`;
  }

  playSong() {
    this.htmlElements.musicContainer.classList.add("play");
    this.htmlElements.playButton
      .querySelector("i.fas")
      .classList.remove("fa-play");
    this.htmlElements.playButton
      .querySelector("i.fas")
      .classList.add("fa-pause");

    this.htmlElements.audio.play();
  }

  pauseSong() {
    this.htmlElements.musicContainer.classList.remove("play");
    this.htmlElements.playButton
      .querySelector("i.fas")
      .classList.add("fa-play");
    this.htmlElements.playButton
      .querySelector("i.fas")
      .classList.remove("fa-pause");

    this.htmlElements.audio.pause();
  }
})();
