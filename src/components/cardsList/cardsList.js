import { DivComponent } from "../../common/div-component";
import "./cardsList.css";

export class CardList extends DivComponent {
    constructor(state, parentState) {
        super();
        this.state = state;
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
                <h2 class="cards-list__title">
                    Найдено книг – ${this.parentState.list.length}
                </h2>
            `;
        return this.el;
    }
}
