import VSpacer from '../src/components/VSpacer'
import VButton from "../src/components/VButton"

export default {
  title: 'Foundations'
}

export const Intro = () => ({
  template: `
    <div class="sbdocs-large-container">
      <h1 class="u-space--double--bottom">New Sounds</h1>
      <h3 class="u-space--double--bottom">Built with Storybook and Vue</h3>
    </div>
  `
})

export const Fonts = () => ({
  template: `
    <div class="sbdocs-large-container">
      <h1 class="u-space--bottom">H1 Headline No. 1</h1>
      <h2 class="u-space--bottom">H2 Headline No. 2</h2>
      <h3 class="u-space--bottom">H3 Headline No. 3</h3>
      <h4 class="u-space--bottom">H4 Headline No. 4</h4>
      <h5 class="u-space--bottom">H5 Headline No. 5</h5>
      <h6>H6 Headline No. 6</h6>
      <hr class="u-space--triple--top u-space--triple--bottom">
       <p class="u-space--bottom">This is normal paragraph text! Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>

       <p class="small-text u-space--bottom">This is small paragraph text!</p>
        <p><a>This is an inline link</a></p>
    </div>
  `
})

export const Colors = () => ({
  template: `
    <div class="sbdocs-large-container">
      <div class="colors">
        <div class="u-background-color--primary"><span>primary</span></div>
        <div class="u-background-color--secondary"><span>secondary</span></div>
        <div class="u-background-color--tertiary"><span>tertiary</span></div>
        <div class="u-background-color--quaternary"><span>quaternary</span></div>
        <div class="u-background-color--quinary"><span>quinary</span></div>
        <div class="u-background-color--gray--light"><span>light gray</span></div>
        <div class="u-background-color--gray"><span>gray</span></div>
        <div class="u-background-color--gray--dark"><span>dark gray</span></div>
        <div class="u-background-color--black"><span>black</span></div>
        <div class="u-background-color--white"><span>white</span></div>
      </div>
    </div>
  `
})

export const Spacing = () => ({
  components: { VSpacer },
  template: `
    <div class="sbdocs-large-container">
      <p class="u-space--bottom">Half:</p>
      <v-spacer size="half" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Default:</p>
      <v-spacer class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Double:</p>
      <v-spacer size="double" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Triple:</p>
      <v-spacer size="triple" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Quad:</p>
      <v-spacer size="quad" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Quin:</p>
      <v-spacer size="quad" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Hex:</p>
      <v-spacer size="hex" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Sept:</p>
      <v-spacer size="sept" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Oct:</p>
      <v-spacer size="oct" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Non:</p>
      <v-spacer size="non" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Dec:</p>
      <v-spacer size="dec" class="u-background-color--gray--light"/>
    </div>
  `
})

export const Grid = () => ({
  template: `
    <div class="sbdocs-large-container">
      <div class="l-grid l-grid--2up u-space--bottom">
        <div class="u-background-color--gray--light u-padding--half u-align--center">Two Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">Two Column</div>
      </div>
      <div class="l-grid l-grid--3up u-space--bottom">
        <div class="u-background-color--gray--light u-padding--half u-align--center">Three Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">Three Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">Three Column</div>
      </div>
      <div class="l-grid l-grid--4up u-space--bottom">
        <div class="u-background-color--gray--light u-padding--half u-align--center">Four Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">Four Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">Four Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">Four Column</div>
      </div>
      <div class="l-grid l-grid--5up u-space--bottom">
        <div class="u-background-color--gray--light u-padding--half u-align--center">Five Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">Five Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">Five Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">Five Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">Five Column</div>
      </div>
      <div class="l-grid l-grid--2x3 u-space--bottom">
        <div class="u-background-color--gray--light u-padding--half u-align--center">1/3 Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">2/3 Column</div>
      </div>
      <div class="l-grid l-grid--3x2 u-space--bottom">
        <div class="u-background-color--gray--light u-padding--half u-align--center">2/3 Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">1/3 Column</div>
      </div>
      <div class="l-grid l-grid--1x4 u-space--bottom">
        <div class="u-background-color--gray--light u-padding--half u-align--center">1/4 Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">3/4 Column</div>
      </div>
      <div class="l-grid l-grid--4x1 l-grid--full-width-small u-space--double--bottom">
        <div class="u-background-color--gray--light u-padding--half u-align--center">3/4 Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">1/4 Column</div>
      </div>
      <h3 class="u-space--bottom">With large gutters:</h3>
      <div class="l-grid l-grid--2up l-grid--large-gutters u-space--double--bottom">
        <div class="u-background-color--gray--light u-padding--half u-align--center">Two Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">Two Column</div>
      </div>
      <h3 class="u-space--bottom">With no gutters:</h3>
      <div class="l-grid l-grid--no-gutters l-grid--2up u-space--double--bottom">
        <div class="u-background-color--gray--light u-padding--half u-align--center">Two Column</div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">Two Column</div>
      </div>
      <h3 class="u-space--bottom">Reordering:</h3>
      <div class="l-grid l-grid--2up u-space--double--bottom">
        <div class="u-background-color--gray--light u-padding--half u-align--center l-grid--order-1-large">Second on
          small breakpoint, first elsewhere
        </div>
        <div class="u-background-color--gray--light u-padding--half u-align--center l-grid--order-2-large">First on
          small breakpoint, second elsewhere
        </div>
      </div>
      <h3 class="u-space--bottom">Vertical Alignment:</h3>
      <div class="l-grid l-grid--1x4 l-grid--top u-space--bottom">
        <div><img src="./assets/Placeholder-Image-4_3.png" alt="placeholder image"/></div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">top</div>
      </div>
      <div class="l-grid l-grid--1x4 l-grid--middle u-space--bottom">
        <div><img src="./assets/Placeholder-Image-4_3.png" alt="placeholder image"/></div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">middle</div>
      </div>
      <div class="l-grid l-grid--1x4 l-grid--bottom u-space--bottom">
        <div><img src="./assets/Placeholder-Image-4_3.png" alt="placeholder image"/></div>
        <div class="u-background-color--gray--light u-padding--half u-align--center">bottom</div>
      </div>
    </div>
  `
})

export const Forms = () => ({
  components: { VButton },
  template: `
    <div class="sbdocs-small-container">
      <label class="u-space--bottom">Text Input
        <input type="text" placeholder="here is some placeholder text">
      </label>
      <label class="u-space--bottom">
        Number Input
        <input type="number" value="100">
      </label>
      <label class="u-space--bottom">Password Input
        <input type="password" aria-describedby="passwordHelpText" placeholder="password">
      </label>
      <label class="u-space--bottom">Text Area
        <textarea placeholder="placeholder text"/>
      </label>
      <p>Inline Buttons</p>
      <div class="input-group u-space--bottom">
        <label for="inline-input" class="hide-ally-element">Label</label>
        <input id="inline-input" class="input-group-field" type="number">
        <v-button type="submit" class="inline-button">Subscribe&nbsp;Now</v-button>
      </div>
      <label class="u-space--bottom">Single Select Menu
        <select>
          <option value="starbuck">Starbuck</option>
          <option value="husker">Husker</option>
          <option value="hotdog">Hot Dog</option>
          <option value="apollo">Apollo</option>
        </select>
      </label>
      <label class="u-space--bottom">Multiple Select Menu
        <select multiple>
          <option value="showboat">Showboat</option>
          <option value="redwing">Redwing</option>
          <option value="narcho">Narcho</option>
          <option value="hardball">Hardball</option>
        </select>
      </label>
      <fieldset class="u-space--bottom">
        <legend>Radio Buttons</legend>
        <input type="radio" name="pokemon" value="Red" id="pokemonRed" required><label for="pokemonRed">Red</label>
        <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label
        for="pokemonBlue">Blue</label>
        <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow"><label for="pokemonYellow">Yellow</label>
      </fieldset>
      <fieldset class="u-space--bottom">
        <legend>Checkboxes</legend>
        <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
        <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
        <input id="checkbox3" type="checkbox"><label for="checkbox3">Checkbox 3</label>
      </fieldset>
    </div>
  `
})
