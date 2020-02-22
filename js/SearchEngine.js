class SearchEngine extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    applyQuery(searchThis){

    }

    connectedCallback() {
        this.shadow.innerHTML = `
      <style>
        .search-line {
          width: 40vw;
          height: 3vh;
          border-radius: 5px;
        }
        .search-button {
          height:5vh;
          width:5vw;
          background: #c8ffb6;
          text-align: center;
          -webkit-text-stroke-color:#ccffe5;
          -webkit-text-fill-color: #000000;
          border-radius: 1vw;
        }
      </style>
      <div class="search-engine">
        <input class="search-line"/>
        <button class="search-button" onclick="applyQuery()"><b>Find</b></button>
      </div>
    `;
    }
}

window.customElements.define('search-engine', SearchEngine);
