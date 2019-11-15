import { CultureFacade } from './lib/CultureFacade';
import { TYPE_MUSIC } from './constants';

const music = new CultureFacade(TYPE_MUSIC);
music.get(3)
  .then(data => console.log(data))
  .catch(e => console.error(e));
