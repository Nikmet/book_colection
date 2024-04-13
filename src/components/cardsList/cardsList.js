import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
import "./cardsList.css";

export class CardList extends DivComponent {
    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    render() {
        this.el.classList.add("cards-list");

        if (this.parentState.loading) {
            this.el.innerHTML = `
                <p class="cards-list__loading-text">Загрузка...</p>
            `;
            return this.el;
        }

        this.el.innerHTML = `
            <div class="cards"></div>
        `;

        for (const card of this.parentState.list) {
            this.el.querySelector(".cards").append(new Card(this.appState, card).render());
        }

        return this.el;
    }
}
