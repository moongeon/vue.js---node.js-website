<template>
  <div class="inner-wrap" fluid fill-height>
    <Loginform-component
      v-on:joinSubmit="joinSubmit"
      v-on:loginSubmit="loginSubmit"></Loginform-component>
  </div>
</template>
<script>
import LoginForm from '@/components/Login/LoginForm.vue';

export default {
  name: 'Login',
  data() {
    return {
    };
  },
  components: {
    'Loginform-component': LoginForm,
  },
  created() {
    //   this.$socket.on('login', (data) => {
    //   console.log(data);
    //   if(data='성공')
    //   alert('success login');
    //   else
    //   {
    //     alert('fail login');
        
    //   }
    // });
  },
  methods: {

    joinSubmit(userName) {
      this.$router.push(`/char-room/${userName}`);
    },
     loginSubmit(id,password) {
       
       // 액션이벤트
       if (id.trim() == '' || password.trim() == '')                     
                    {
                    alert('ERR: Please check your input.');
                    return;
                    }
               this.$store.dispatch('LOGIN', {id, password})
                 .then(() => this.$router.push(`/char`))
                 .catch((message) => this.message = message.response.data);




//------------------------ sockect 플러그 방식
      //  const msg =
      //  {
      //   id: id,
      //   password : password,
      //  };
      //  console.log("msg = "+ msg);
      //  this.$login(msg);

    },
  },
  };

</script>
