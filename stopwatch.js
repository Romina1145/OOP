class Stopwatch {
  constructor() {
    let startTime,
      endTime,
      running,
      duration = 0;
    this.start = function () {
      if (running) throw new Error("Stopwatch has alreday started");
      let running = true;
      startTime = new Date();
    };
    this.end = function () {
      if (!running) throw new Error("Stpwatch is not started");
      running = false;
      endTime = new Date();
      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;
    };
    this.reset = function () {
      endTime = null;
      startTime = null;
      running = false;
      duration = 0;
    };
    Object.defineProperty(this, "duration", {
      get: function () {
        return duration;
      },
    });
  }
}
