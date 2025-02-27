import { LitElement, html } from 'lit';
import '../characters-component-dp/index.js';

export class CharactersComponentDm extends LitElement {

  firstUpdated() {
    this.fetchAndEmitCharacters();
}

async fetchAndEmitCharacters() {
    const dp = this.shadowRoot.querySelector('characters-component-dp');
    try {
        const characters = await dp.getCharacters();
        
        // Process the data
        const groupBySpecie = Object.groupBy(characters, character => character.species);
        
        // Emit custom event with the response data
        this.dispatchEvent(new CustomEvent('characters-loaded', {
            detail: groupBySpecie,
            bubbles: true,
            composed: true
        }));
        
        return groupBySpecie;
    } catch (error) {
        console.error('Error fetching characters:', error);
        // Emit error event
        this.dispatchEvent(new CustomEvent('characters-error', {
            detail: error,
            bubbles: true, 
            composed: true
        }));
        return { Human: [], Alien: [] };
    }
}

render() {
    return html`<characters-component-dp></characters-component-dp>`;
}
}