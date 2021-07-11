import json from './parser';
import read from './reder';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((response) => JSON.parse(response));
  }
}
