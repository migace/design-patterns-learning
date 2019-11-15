export class TvShowsService {
  get resources() {
    return [
      { id: 1, title: "Twin Peaks" },
      { id: 2, title: "Luther" },
      { id: 3, title: "The Simpsons" }
    ];
  }

  fetch(id) {
    return this.resources.find(item => item.id === id);
  }
}
