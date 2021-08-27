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
    this.htmlElements.previousButton.addEventListener("click", () => {
      this.previousSong();
    });
    this.htmlElements.nextButton.addEventListener("click", () => {
      this.nextSong();
    });
    this.htmlElements.audio.addEventListener("timeupdate", (e) => {
      this.updateProgress(e);
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

  previousSong() {
    this.songIndex--;
    if (this.songIndex < 0) {
      this.songIndex = this.songs.length - 1;
    }
    this.loadSong(this.songs[this.songIndex]);
    this.playSong();
  }

  nextSong() {
    this.songIndex++;
    if (this.songIndex > this.songs.length - 1) {
      this.songIndex = 0;
    }
    this.loadSong(this.songs[this.songIndex]);
    this.playSong();
  }

  updateProgress(e: Event) {
    const { duration, currentTime } = <HTMLAudioElement>e.target;
    const progressPercent = (currentTime / duration) * 100;
    this.htmlElements.progress.style.width = `${progressPercent}%`;
  }
})();
