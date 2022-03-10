import view from "./view.js";
import "core-js/stable";

const controlVowelCheck = function (input) {
  const inputArr = [...input.trim().replace(/\s/g, "")];
  const vowels = inputArr.filter((letter) =>
    ["a", "e", "i", "o", "u"].includes(letter)
  );

  alert(`Input contains ${vowels.length} vowels.`);
};

const init = function () {
  view.addHandlerTakeInputClick(controlVowelCheck);
  view.addHandlerTakeInputEnter(controlVowelCheck);
};
init();
