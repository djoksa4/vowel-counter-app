class View {
  #checkButton = document.querySelector(".input__btn");
  #textInput = document.querySelector(".input__text");

  addHandlerTakeInputClick(handler) {
    this.#checkButton.addEventListener(
      "click",
      function () {
        const input = this.#textInput.value;
        this.#textInput.value = "";
        if (input.trim() === "") return;
        handler(input);
      }.bind(this)
    );
  }

  addHandlerTakeInputEnter(handler) {
    this.#textInput.addEventListener(
      "keydown",
      function (e) {
        if (e.key !== "Enter") return;
        const input = this.#textInput.value;
        this.#textInput.value = "";
        if (input.trim() === "") return;
        handler(input);
      }.bind(this)
    );
  }
}

export default new View();
