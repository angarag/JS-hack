const revealing_mars = (function() {
  //do smth
  let name = "Mars";
  function setName(n) {
    name = n;
  }
  return {
    name: "Mars",
    setName: setName,
    printName: () => {
      console.log(name);
    }
  };
})();
revealing_mars.printName();
revealing_mars.setName("Angarag");
revealing_mars.printName();

(() => {
  console.log("this is a module pattern");
})();
