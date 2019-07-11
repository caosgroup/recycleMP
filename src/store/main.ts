import { observable } from 'mobx'

const mainStore = observable({
  curTabIndex: 1,
  setCurTabIndex(index: number) {
    this.curTabIndex = index;
  },
})
export default mainStore