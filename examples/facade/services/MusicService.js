export class MusicService {
  get resources() {
    return [
      { id: 1, title: "The Fragile" },
      { id: 2, title: "Alladin Sane" },
      { id: 3, title: "OK Computer" }
    ];
  }

  fetch(id) {
    return this.resources.find(item => item.id === id);
  }
}
