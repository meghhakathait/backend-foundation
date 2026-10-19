const fs = require("fs/promises");

async function getUsers() {
  try {
    const content = await fs.readFile("user.json", "utf-8");
    //Jab hum file read karte hain, computer uska data bytes ke form mein read kar sakta hai. Humein agar us data ko readable text ke form mein chahiye, toh "utf-8" use karte hain.
    //readFile() se humein JSON file ka data string ke form mein milta hai. Lekin agar humein us data ko JavaScript mein object ki tarah use karna hai, toh JSON.parse() use karte hain.
    const user = JSON.parse(content); // Converts a (JSON) string into an object.
    console.log(user);

    //syyntax- JSON.stringify(value, replacer, space)
    const updateContent = JSON.stringify(user, null, 2); //Converts a JavaScript value to a (JSON) string.
    await fs.writeFile("user.json", updateContent, "utf-8"); //Formatted string ko user.json file mein write karta hai.
  } catch (error) {
    console.log(error);
  }
}
getUsers();

async function addUser(newUser) {
  try {
    //get previous data
    const content = await fs.readFile("user.json", "utf-8");
    const users = JSON.parse(content);

    users.push(newUser);

    const updateContent = JSON.stringify(users, null, 2);
    await fs.writeFile("user.json", updateContent, "utf-8");
  } catch (error) {
    console.log(error.message);
  }
}

addUser({ id: 3, name: "Raghav", role: "student" });
