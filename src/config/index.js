const urlBackEnd = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://mdcodeflix.herokuapp.com';

export default {
  urlBackEnd,
};
