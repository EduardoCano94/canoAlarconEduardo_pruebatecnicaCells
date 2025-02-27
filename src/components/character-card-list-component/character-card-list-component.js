import { LitElement, html } from 'lit';
import { Styles } from "./character-card-list-component-styles.js";
import '../character-card-component/index.js'

export class CharacterCardListComponent extends LitElement {
  static properties = {
    species: { type: String },
    data: { type: Array },
  };

  static styles = [Styles];

  constructor() {
    super();
    this.species = "";
    this.data = [];
  }

  render() {
    return html`
      <h2 class="species-title">Species: ${this.species}</h2>
      <div class="grid-container">
        ${this.data && this.data.length ? 
          this.data.map((character) => {
            return html`<character-card-component
              name=${character.name}
              status=${character.status || 'unknown'}
              species=${character.species || ''}
              type=${character.type || ''}
              gender=${character.gender || ''}
              .origin=${character.origin || {}}
              .location=${character.location || {}}
              image=${character.image || ''}
            />`;
          }) : html`<p>No data available</p>`
        }
      </div>
    `;
  }
}