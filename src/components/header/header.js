import { DivComponent } from "../../common/div-component";
import "./header.css";

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.classList.add("header");
        this.el.innerHTML = `
            <div class="">
                <img src="./static/logo.svg" alt="logo">
            </div>
            <div class="menu">
                <a href="#" class="menu__item">
                    <img src="./static/search.svg" alt="search_icon">
                    Поиск книг
                </a>
                <a href="#favorites" class="menu__item">
                    <img src="./static/favorites.svg" alt="favorites_icon">
                    Избранное
                </a>
                <div class="menu__counter">${this.appState.favorites.length}</div>
            </div>
        `;
        return this.el;
    }
}
