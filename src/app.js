import 'bootstrap/dist/css/bootstrap.min.css';
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
    },
  },
  // plugins: [require('dva-logger')()],
};
