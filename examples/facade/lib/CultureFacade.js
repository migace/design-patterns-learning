import { MusicService } from '../services/MusicService';
import { MovieService } from '../services/MovieService';
import { TvShowsService } from '../services/TvShowsService';
import {
  TYPE_MUSIC,
  TYPE_MOVIE,
  TYPE_TV
} from '../constants';

export class CultureFacade {
  constructor(type) {
    this.type = type;
  }

  get(id) {
    switch (this.type) {
      case TYPE_MUSIC: {
        return this._tryToReturn(this._findMusic, id);
      }

      case TYPE_MOVIE: {
        return this._tryToReturn(this._findMovie, id);
      }

      case TYPE_TV: {
        return this._tryToReturn(this._findTVShow, id);
      }

      default: {
        throw new Error("No type set!");
      }
    }
  }

  get _error() {
    return { status: 404, error: `No item with this id found` };
  }

  _tryToReturn(func, id) {
    const result = func.call(this, id);
    
    return new Promise((ok, err) => !!result
      ? ok(result)
      : err(this._error));
  }

  _findMusic(id) {
    const db = new MusicService();
    return db.fetch(id);
  }

  _findMovie(id) {
    return new MovieService(id);
  }

  _findTVShow(id) {
    return TvShowsService(id);
  }
}
