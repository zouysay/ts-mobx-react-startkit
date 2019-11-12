import { observable, action } from 'mobx';

class Store {
  @observable
  test = '';

  @action
  changeTest = (value: string) => {
    this.test = value;
  };
}

export default new Store();
