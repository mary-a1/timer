const args = process.argv;
const times = args[2];

const alarmClock = function(times) {
  if (times === NaN) {
    //end immediately
    return;
  }
  if (times <= 0) {
    //end immediately
    return;
  }
  if (times === null) {
    //no beeps
    return;
  }

  for (time of times) {
    setTimeout(() => {
      console.log("I am running");
      process.stdout.write('\x07');
    }, time * 1000);
  }
};

alarmClock(times);