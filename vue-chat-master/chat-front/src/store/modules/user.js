import {IS_VALIDATION_TOKEN, LOGIN, LOGOUT} from '../../const/user-type';
//import {enhanceAccessToken, logout} from '../../utils/loginMethods';
import axios from 'axios';
import server from '../../const/server-host';
//import {EventBus} from '../../utils/event-bus';
import router from '../../router';


const state = {
    userData: (localStorage.getItem('userData')) || {}
};

const getters = {
    getUserData: state => state.userData
};

const mutations = {
    [LOGIN]: (state, {data}) => {
        console.log('mutationslogin',data.data.userData);
        state.userData = data.data.userData;
       // localStorage.accessToken = data.accessToken;
        localStorage.setItem('userData', stringify(data.data.userData));
        //enhanceAccessToken();
    },
    [LOGOUT]: (state) => {
        state.userData = '';
        axios.defaults.headers.common['Authorization'] = undefined;
        logout();
    }
};

const actions = {
    [LOGIN]({commit}, {id, password}) {
        return axios.post(`${server.AuthServer}/login`, {id,  password})
            .then((res) => {
                console.log('actionslogin',res);
                alert('success login');
                commit('LOGIN', res);
            })
            .then(() => {
                //EventBus.$emit('closeHamburgerMenu');
                //EventBus.$emit('closeModal');
            })
            .catch(e => {
                if (e.response) return e.response.data;
                //else return 'ERR_CONNECTION_REFUSED';
            });
    },
    [LOGOUT]({commit}) {
        return axios.get(`${server.AuthServer}/auth/logout`)
            .then(() => {
                commit('LOGOUT');
            }).catch(e => console.log(e));
    },
    [IS_VALIDATION_TOKEN]({commit}) {
        return axios.get(`${server.AuthServer}/auth/token-check`)
            .then(({data}) => data.token)
            .catch(() => {
                commit('LOGOUT');
                router.push('/login');
                return false;
            });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};