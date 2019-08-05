import { observable, action } from 'mobx';

export default class CounterStore {
  @observable number = 1;

  constructor(store) {
    this.store = store;
  }

  @action increase = () => {
    this.number++;
  }

  @action decrease = () => {
    this.number--;
  }
}