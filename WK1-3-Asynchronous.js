function greet(name, callback) {
  console.log('Hello ' + name);

  callback();
}

greet("Ade", () => {
    console.log("passed data on callback")
})


function fetchUser(result, callback) {
    setTimeout(() => {
      console.log(result);
      callback();
    }, 2000);

}


fetchUser("User Fetched", () => {
  console.log("");
})