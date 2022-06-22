const downLoadProgress = {
  state: {
    // 文件下载进度
    progressList: [],
    progressError: ''
  },
  mutations: {
    SET_PROGRESS: (state, progressObj) => {
      // 修改进度列表
      if (state.progressList.length) {
        // 如果进度列表存在
        if (state.progressList.find(item => item.path === progressObj.path)) {
          // 前面说的path时间戳是唯一存在的，所以如果在进度列表中找到当前的进度对象
          state.progressList.find(item => item.path === progressObj.path).progress = progressObj.progress
          // 改变当前进度对象的progress
        }
      } else {
        // 当前进度列表为空，没有下载任务，直接将该进度对象添加到进度数组内
        state.progressList.push(progressObj)
      }
    },
    DEL_PROGRESS: (state, props) => {
      state.progressList.splice(state.progressList.findIndex(item => item.path === props), 1) // 删除进度列表中的进度对象
    },
    CHANGE_SETTING: (state, { key, value }) => {
      // eslint-disable-next-line no-prototype-builtins
      if (state.hasOwnProperty(key)) {
        state[key] = value
      }
    }
  },
  actions: {
    changeSetting({ commit }, data) {
      commit('CHANGE_SETTING', data)
    }
  }
}
export default downLoadProgress
