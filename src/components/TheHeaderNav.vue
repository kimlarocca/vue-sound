<template>
  <nav>
    <div class="l-grid l-grid--4x1">
      <div>
        <ul class="u-plain-horizontal-list">
          <li class="nav-item">
            <router-link
              to="/shows"
              class="nav-link"
            >
              Shows
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/features"
              class="nav-link"
            >
              Features
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/livestream"
              class="nav-link"
            >
              Playlist
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/artists"
              class="nav-link"
            >
              Artists
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              class="nav-link"
            >
              About
            </router-link>
          </li>
        </ul>
      </div>
      <div class="u-align--right">
        <ul class="u-plain-horizontal-list">
          <li class="nav-item">
            <router-link
              to="/search"
              class="nav-link"
            >
              <search-svg />
            </router-link>
          </li>
          <li class="nav-item">
            <a
              href="https://pledge3.wqxr.org/donate/q2/onestep/?ref=button-donate-header"
              target="_blank"
              class="nav-link gtm__click-title-tracking"
              data-action="Donate"
            >Donate</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import SearchSvg from './svg/SearchSvg'

  export default {
    name: 'TheHeaderNav',
    components: { SearchSvg }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/breakpoints";

  .nav-item {
    margin-bottom: 2px;
    padding: .75rem .1rem;

    &:last-of-type {
      margin-right: 0;
    }

    @media all and (min-width: $medium) {
      padding: .75rem .25rem;
    }
  }

  .nav-link,
  .nav-link:visited,
  .nav-link:active {
    color: var(--color-black);
    padding: 1rem .1rem;

    &:hover {
      color: var(--color-quaternary);
      text-decoration: none;
    }

    @media all and (min-width: $medium) {
      padding: 1rem .5rem;
    }

    &.router-link-active {
      border-bottom: solid 1px var(--color-black);
    }
  }
</style>
