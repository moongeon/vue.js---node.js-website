import {PUSH_MSG_DATA, DELETE_MSG_DATA} from '../../const/Constant';

const state = {
  msgDatas: [],
};

// getters
const getters = {
  msgDatas: state => state.msgDatas
};



// mutations 기능 : 상태를 변경하는 방법 이벤트와 유사하다.
const mutations = {
  [PUSH_MSG_DATA]: (state, payload) => {
    state.msgDatas.push(payload);
  },
  [DELETE_MSG_DATA]: (state) =>  {
    state.msgDatas = [];
}
};


// actions
const actions = {
  

};

export default {
  state,
  getters,
  actions,
  mutations,
};
