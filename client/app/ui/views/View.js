class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }

    template(modelo) {
        throw new Error("Você precisa implementar o método template.");
    }

    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
    }
}