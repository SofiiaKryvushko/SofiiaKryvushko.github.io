//1.1 printNumbers
function printNumbers(arr) {
    let i = 0;
    let timerId = setInterval(function () {
        let current = arr[i];
        console.log(current);
        if (i === arr.length - 1) {
            clearInterval(timerId);
        }
        i++;
    }, 1000);
}
printNumbers([1, 3, 2, 4]);


//1.2 setTimeout
function printNumbersRec(arr) {
    let i = 0;

    setTimeout(function go() {
        let current = arr[i];
        console.log(current);
        if (i < arr.length - 1) {
            setTimeout(go, 1000);
        }
        i++;
    }, 1000);
}

printNumbersRec([1, 3, 2, 4]);


//2 Debounce
function debounce(func, timeout) {
    let isReady = false;
    return function () {
        if (isReady) return;
        func.apply(this, arguments);
        isReady = true;
        setTimeout(() => isReady = false, timeout);
    };
}

let f = debounce(console.log, 1000);

f(1);
f(2);
setTimeout(() => f(3), 100);
setTimeout(() => f(4), 1100);


//3 Throttle
const throttle = (func, timeout) => {

    let isThrottled = false,
      savedArgs = null,
      savedThis = null;
  
    function wrapper(...args) {
  
      if (isThrottled) {
        savedArgs = args;
        savedThis = this;
        return;
      }
  
      func.apply(this, args);
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false;
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, timeout);
    }
  
    return wrapper;
  }

  const func1000 = throttle(console.log, 1000);

  func1000(1);
  func1000(2); 
  func1000(3); 
  




