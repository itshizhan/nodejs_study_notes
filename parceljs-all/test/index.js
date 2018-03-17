const Main = require('./Main');
let bundler = new Main();

//bundler 继承events，因此具备相关的事件和方法，例如
bundler.on('event', () => {
  console.log('an event occurred!');
});
bundler.emit('event');

console.log(bundler);
bundler.normalizeOptions();
