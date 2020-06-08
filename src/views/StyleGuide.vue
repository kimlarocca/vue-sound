<template>
  <div class="style-guide">

    <div class="container">
      <h1 class="u-space--triple--bottom">Style Guide</h1>

      <section id="typography" class="u-space--double--bottom">
        <h3 class="u-space--bottom">Typography</h3>
        <div class="box u-space--bottom">
          <h1 class="u-space--bottom">H1 Headline No. 1</h1>
          <h2 class="u-space--bottom">H2 Headline No. 2</h2>
          <h3 class="u-space--bottom">H3 Headline No. 3</h3>
          <h4 class="u-space--bottom">H4 Headline No. 4</h4>
          <h5 class="u-space--bottom">H5 Headline No. 5</h5>
          <h6>H6 Headline No. 6</h6>
        </div>
        <p class="u-space--bottom">This is normal paragraph text! Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do
          eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui
          officia deserunt mollit anim id est laborum.</p>
        <p><a>This is an inline link</a></p>
      </section>

      <section id="colors" class="u-space--double--bottom">
        <h3 class="u-space--bottom">Colors</h3>
        <div class="colors">
          <div class="u-background-color--primary"><span>primary</span></div>
          <div class="u-background-color--secondary"><span>secondary</span></div>
          <div class="u-background-color--gray--light"><span>light-gray</span></div>
          <div class="u-background-color--gray"><span>gray</span></div>
          <div class="u-background-color--gray--dark"><span>dark-gray</span></div>
          <div class="u-background-color--black"><span>black</span></div>
        </div>
      </section>

      <section id="buttons" class="u-space--double--bottom">
        <h3 class="u-space--bottom">Buttons</h3>
        <p class="u-space--bottom"><a class="button" href="#">button</a></p>
        <p><a class="button arrow">button with arrow</a></p>
      </section>

      <section id="grid" class="u-space--double--bottom">
        <h3 class="u-space--bottom">Grid Examples (desktop/tablet/mobile)</h3>
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
          <div><img src="https://via.placeholder.com/300x300?text=1:1" alt="placeholder image"/></div>
          <div class="u-background-color--gray--light u-padding--half u-align--center">top</div>
        </div>
        <div class="l-grid l-grid--1x4 l-grid--middle u-space--bottom">
          <div><img src="https://via.placeholder.com/300x300?text=1:1" alt="placeholder image"/></div>
          <div class="u-background-color--gray--light u-padding--half u-align--center">middle</div>
        </div>
        <div class="l-grid l-grid--1x4 l-grid--bottom u-space--bottom">
          <div><img src="https://via.placeholder.com/300x300?text=1:1" alt="placeholder image"/></div>
          <div class="u-background-color--gray--light u-padding--half u-align--center">bottom</div>
        </div>
      </section>

    </div>

  </div>
</template>

<style scoped lang="scss">
  .style-guide {
    .box {
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
      padding: 2rem;
    }

    .colors {
      > div {
        height: 100px;
        width: 250px;
        display: inline-block;

        span {
          padding: 10px;
          background: white;
        }
      }
    }
  }
</style>
