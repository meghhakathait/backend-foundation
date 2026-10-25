// Event is something that happens and can be communicated to interested parts of an application.
//ek func complete hua to vo ek event hota hai

//ex of js event
// button.addEventListner("click", () => {
//   console.log("Button clicked");
// });

// EventEmitter is a class from Node.js's built-in  events module.

const EventEmitter = require("events");

// create emitter -> register listner -> emit event -> registered listner executes.

const emitter = new EventEmitter(); // we hve to create a new class
emitter.on("greet", () => {
  console.log("hello from a custom event");
});

emitter.emit("greet"); // event trigger

// on() -> register a listner.
// emit()-> emit an event.
// once()-> run a listner only once.
// off()-> remove listner.
// remove()-> remove a specific listner.

const userEventEmitter = new EventEmitter();
userEventEmitter.on("userRegistered", (user) => {
  console.log(`Welcome ${user.name}`);
  console.log(`Welcome ${user.email}`);
});
userEventEmitter.emit("userRegistered", {
  id: 1,
  name: "megha",
  email: "megha123@gmail.com",
});

const orderStatus = new EventEmitter();
orderStatus.on("placed", () => {
  console.log("order placed");
});

orderStatus.on("accepted", () => {
  console.log("order accepted");
});

orderStatus.on("outfordelivery", () => {
  console.log("order out for delivery");
});

orderStatus.on("delivered", () => {
  console.log("order delivered");
});

orderStatus.emit("placed");
orderStatus.emit("accepted");
orderStatus.emit("outfordelivery");
orderStatus.emit("delivered");
