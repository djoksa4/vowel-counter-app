class View {
  #checkButton = document.querySelector(".btn--check");
  #textInput = document.querySelector(".text--input");

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
