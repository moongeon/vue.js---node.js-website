
<template>
<v-app id="inspire">
  <v-content>
           <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
  <v-toolbar-title>LOG IN</v-toolbar-title>
    <v-tooltip bottom>
      </v-tooltip>
   </v-toolbar>
  <v-card-text>
    <v-img
     aspect-ratio="2.75"
     src="https://picsum.photos/id/1/2000/1000">          
     <v-container fill-height fluid>
     <v-layout fill-height>
      <v-flex xs12 align-end flexbox>
        <span class="headline white--text">{{ "문근VO.1 2020.01.11"}}</span>
              </v-flex>
            </v-layout>
          </v-container>        
     </v-img>
        <v-form>
                  <v-text-field
                    v-model="id"
                    label="아이디를 입력하세요."
                    name="id"
                    prepend-icon="person"
                    type="text"
                  />

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="패스워드를 입력하세요."
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  />
                  <v-text-field
                  v-model="userName"
                  label="대화명"
                  required
                  v-on:keyup.enter="joinSubmit"
                  />      
                  </v-form>
                      </v-card-text>
                     <div class="text-xs-center">
        <v-btn @click="joinSubmit" round color="primary" dark>JOIN</v-btn>
        <v-btn @click="loginSubmit" round color="primary" dark>로그인</v-btn>
      </div>
 
     </v-card>
     </v-content> 
  </v-app>
</template>

<script>
export default {
  name: 'LoginForm',
   props: ['join'],
  data() {
    return {
      userName: '',
      id : null,
      password : null,
    };
  },
  methods: {
    joinSubmit() {
      this.$emit('joinSubmit', this.userName);
    },
     loginSubmit() {
      this.$emit('loginSubmit', this.id, this.password);
       
      let selectedUser = null
    
    }
    ,
  },
};
</script>
