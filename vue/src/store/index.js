import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */
const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if (currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    exampleCards: [
      {
        cardId: 999,
        subject: 'History',
        question: 'List in order the first five presidents of the USA.',
        tags: 'Presidents, History, Government',
        answer: 'Washington, Adams, Jefferson, Madison, Monroe',
        username: 'ExampleUser',
        userId: 2,

      },
      {
        cardId: 998,
        subject: 'Language',
        question: 'How do you say "Hello" in Spanish, French, and German?',
        tags: 'Languages, Culture',
        answer: 'Hola! Bonjour! Guten Tag!',
        username: 'ExampleUser',
        userId: 2,
      },
      {
        cardId: 997,
        subject: 'Science',
        question: 'What are the elements that comprise water? BONUS: give the molecular structure!',
        tags: 'Chemistry, Molecules, Science',
        answer: 'Hydrogen and Oxygen: H2O',
        username: 'ExampleUser',
        userId: 2,
      },
      {
        cardId: 996,
        subject: 'Music',
        question: 'How many keys are there on a standard Grand Piano?',
        tags: 'Instruments, Music',
        answer: '88 Keys',
        username: 'ExampleUser',
        userId: 2,
      },
      {
        cardId: 995,
        subject: 'Music',
        question: 'What famous march written by the English composer Edward Elgar is commonly played at graduation ceremonies?',
        tags: 'English Music, History, Fun-Facts',
        answer: 'Pomp And Circumstance',
        username: 'ExampleUser',
        userId: 2,
      },
      {
        cardId: 994,
        subject: 'American History',
        question: 'When was the first U.S. dollar printed?',
        tags: 'History, Currency, Dates',
        answer: '1862',
        username: 'ExampleUser',
        userId: 2,
      },
      {
        cardId: 993,
        subject: 'American History',
        question: 'What was the first United States national monument?',
        tags: 'History, Monuments, Geography',
        answer: 'Devil???s Tower in Wyoming',
        username: 'ExampleUser',
        userId: 2,
      },
      {
        cardId: 992,
        subject: 'American History',
        question: 'What was the date of the Black Tuesday stock market crash?',
        tags: 'History, Money',
        answer: 'October 24th, 1929',
        username: 'ExampleUser',
        userId: 2,
      },
      {
        cardId: 991,
        subject: 'Music',
        question: 'Who is the Italian composer of the operas Macbeth, La Traviata, and Falstaff?',
        tags: 'Opera, History, Theatre',
        answer: 'Giuseppe Verdi',
        username: 'ExampleUser',
        userId: 2,
      },
      {
        cardId: 990,
        subject: 'Science',
        question: 'What defines the identity of an element?',
        tags: 'Science, Elements, Chemistry',
        answer: 'The number of protons',
        username: 'ExampleUser',
        userId: 2,
      }
    ],
    activeEditCard: {
      cardId: null,
      subject: "",
      question: "",
      tags: "",
      answer: "",
      userId: "",
    },
    cardIdsToAdd: [],
    activeEditDeck: {
      deckId: null,
      name: "",
      subject: "",
      description: "",
      userId: ""
    },
    studySession: false,
    activeDeck: 0,
    activeDeckName: ""
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    },
    SET_EDIT_CARD(state, card) {
      state.activeEditCard = card;
    },
    CLEAR_EDIT_CARD(state) {
      state.activeEditCard = {
        cardId: null,
        subject: "",
        question: "",
        tags: "",
        answer: "",
        userId: "",
      };
    },
    ADD_CARD_ID(state, cardId) {
      state.cardIdsToAdd.push(cardId);
    },
    REMOVE_CARD_ID(state, cardId) {
      state.cardIdsToAdd.splice(state.cardIdsToAdd.indexOf(cardId), 1);
    },
    CLEAR_CARD_IDS(state) {
      state.cardIdsToAdd = [];
    },
    SET_EDIT_DECK(state, deck) {
      state.activeEditDeck = deck;
    },
    CLEAR_EDIT_DECK(state) {
      state.activeEditDeck = {
        deckId: null,
        name: "",
        subject: "",
        description: "",
        userId: ""
      }
    },
    TOGGLE_SESSION(state) {
      state.studySession = !state.studySession;
    },
    SET_ACTIVE_DECK(state, deckId) {
      state.activeDeck = deckId;
    },
    CLEAR_ACTIVE_DECK(state) {
      state.activeDeck = 0;
    },
    SET_ACTIVE_DECK_NAME(state, name) {
      state.activeDeckName = name;
    },
    CLEAR_DECK_NAME(state) {
      state.activeDeckName = "";
    }
  }
})
