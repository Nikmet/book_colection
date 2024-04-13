import { DivComponent } from "../../common/div-component";
import "./card.css";

export class Card extends DivComponent {
    constructor(appState, cardState) {
        super();
        this.appState = appState;
        this.cardState = cardState;
    }

    render() {
        this.el.classList.add("card");

        const exsistInFavoritse = this.appState.favorites.find(b => b.key == this.cardState.key);

        this.el.innerHTML = `
            <div class="card__img">
                <img 
                src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" 
                alt="cover">
            </div>
            <div class="card__info">
                <div class="card__tag">${this.cardState.subject ? this.cardState.subject[0] : "Не задано"}</div>
                <div class="card__title">${this.cardState.title}</div>
                <div class="card__author">${this.cardState.author_name ? this.cardState.author_name[0] : "Не задано"}</div>
                <div class="card__footer">
                    <button class="button_add ${exsistInFavoritse ? "button_add-active" : ""}">
                        ${exsistInFavoritse ? `<img src="./static/favorite-active.svg" alt="Избранное">` : `<img src="./static/favorite-unactive.svg" alt="Избранное">`}
                    </button>
                </div>
            </div>
        `;

        return this.el;
    }
}
