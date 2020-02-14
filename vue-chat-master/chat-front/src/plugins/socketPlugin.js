import Vue from 'vue';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');


const SocketPlugin = {
  install(vue) {
    vue.mixin({
    });
    vue.prototype.$sendMessage = (payload) => {
      console.log(payload);
      socket.emit('chat', {
        nickname: payload.nickname,
        message: payload.message,
        roomSeq: payload.roomSeq    
      });
    
    };
    vue.prototype.$join = (payload) => {
      console.log(payload);
      socket.emit('join', payload);
  };

     vue.prototype.$leave = (payload) => {
      socket.emit('leave', payload);
  };
   
    // vue.prototype.$login = (payload) => {
    //   console.log(payload);
    //   socket.emit('login', payload);
    // };

    // 인스턴스 메소드 추가
    vue.prototype.$socket = socket;
  },
};

Vue.use(SocketPlugin);
