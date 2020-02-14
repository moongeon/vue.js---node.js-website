<template>
  <div class="inner-wrap" fluid fill-height inner-wrap>
    <Message-List :msgs="msgDatas" class="msg-list"></Message-List>
    <Message-From v-on:submitMessage="sendMessage" class="msg-form" ></Message-From>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import MessageList from '../components/Chat/MessageList';
import MessageForm from '../components/Chat/MessageForm';
import {PUSH_MSG_DATA, DELETE_MSG_DATA} from '../const/Constant';



export default {
  name: 'ChatRoom',
  data() {
    return {
      datas: [],
    };
  },
  components: {
    'Message-List': MessageList,
    'Message-From': MessageForm,
  },
  computed: {
    ...mapState({
      msgDatas: state => state.socket.msgDatas,
    }),
  },
  created() {
    const $ths = this;
    this.$socket.on('chat', (data) => {
      console.log(data);
      this.pushMsgData(data);
      $ths.datas.push(data);
    });
  },
  methods: {
    ...mapMutations({
      pushMsgData: PUSH_MSG_DATA,
    }),
    sendMessage(msg) {
      this.pushMsgData({
        from: {
        name: '나',
        },
        msg,
      });
      this.$sendMessage({
        name: this.$route.params.username,
        msg,
      });
    },
  },
};
</script>

<style>
.msg-form {
  bottom: -28px;
  position: absolute;
  left: 0;
  right: 0;
}
.msg-list {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 60px;
  overflow-x: scroll;
}
</style>
