import { observable, action, computed } from 'mobx';

export default class MarketStore {
  @observable selectedItems = [];

  constructor(store) {
    this.store = store;
  }

  @action
  put = (name, price) => {
    const { number } = this.store.counter;
    const exists = this.selectedItems.find(item => item.name === name);
    if(!exists) {
      this.selectedItems.push({
        name, price, count: number
      });
      return;
    }
    exists.count += number;
  };

  @action
  take = name => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    itemToTake.count--;
    if(itemToTake.count === 0) {
      this.selectedItems.remove(itemToTake);
    }
  }

  @computed
  get total() {
    return this.selectedItems.reduce((prev, current) => {
      return prev + current.price * current.count;
    }, 0);
  }
};
