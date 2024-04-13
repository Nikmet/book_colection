import onChange from "on-change";
import { AbstractView } from "../../common/view";
import { Header } from "../../components/header/header";
import { CardList } from "../../components/cardsList/cardsList";

export class FavoritesView extends AbstractView {
    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.seTitle("Избранное");
    }

    destroy() {
        onChange.unsubscribe(this.appState);
        onChange.unsubscribe(this.state);
    }

    appStateHook(path) {
        if (path === "favorites") {
            this.render();
        }
    }

    render() {
        const main = document.createElement("div");
        this.app.innerHTML = "";
        this.renderHeader();
        const title = document.createElement("h2");
        title.classList.add("cards-list__title");
        title.innerHTML = `
            <h2 class="cards-list__title">
                Избранное – ${this.appState.favorites.length}
            </h2>
        `;
        main.append(title);
        main.append(new CardList(this.appState, { list: this.appState.favorites }).render());
        this.app.append(main);
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}
