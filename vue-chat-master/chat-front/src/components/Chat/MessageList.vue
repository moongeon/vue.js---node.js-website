<template>
    <div v-auto-bottom="msgs" class="chat-wrap">
        <div
                v-for="(msg,index) in msgs"
                :key="index"
                class="chat-line"
        >
            <span class="chat-id">{{ msg.nickname }}</span>: <span class="chat-msg">{{ msg.message }}</span>
        </div>
    </div>
</template>


<script>
export default {
  name: 'MessageList',
  props: ['msgs'],
};
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>
