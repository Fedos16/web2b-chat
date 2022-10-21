import { createStore } from 'vuex';
import { messages } from '@/data/index';
import { formatingText } from '@/helpers/index';

export default createStore({
  state: {
    searchMessageText: '',
    messages
  },
  getters: {
    getMessages(state) {
      return state.messages.filter(item => {
        return item.text.toLowerCase().includes(state.searchMessageText.toLowerCase());
      }).map(item => {
        if (state.searchMessageText !== '') {
          item.findedText = formatingText(item.text, state.searchMessageText);
        } else {
          delete item.findedText;
        }
        
        return item;
      });
    }
  },
  mutations: {
    updateSearchMessageText(state, text) {
      state.searchMessageText = text;
    }
  },
  actions: {
  }
})
