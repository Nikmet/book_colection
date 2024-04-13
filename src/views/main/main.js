import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/header/header.js";
import { Search } from "../../components/search/search.js";

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0,
    };

    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.seTitle("Поиск книг");
    }

    appStateHook(path) {
        if (path === "favorites") {
            // this.render();
        }
    }

    render() {
        const main = document.createElement("div");
        this.app.innerHTML = "";
        this.app.append(main);
        this.renderHeader();
        main.append(new Search(this.state).render());
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}
