const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
let innerFunc = debounce(function () {
  console.log("hello");
}, 2000);

innerFunc();
