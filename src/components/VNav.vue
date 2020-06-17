<template>
  <nav>
    <div class="l-grid l-grid--2up">
      <div>
        <ul>
          <li>
            <router-link to="/shows">Shows</router-link>
          </li>
          <li>
            <router-link to="/features">Features</router-link>
          </li>
          <li>
            <router-link to="/livestream">Playlist</router-link>
          </li>
          <li>
            <router-link to="/artists">Artists</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
      <div class="u-align--right">
        <ul>
          <li>
            <router-link to="/search">
              <search/>
            </router-link>
          </li>
          <li><a href="https://pledge3.wqxr.org/donate/q2/onestep/?ref=button-donate-header" target="_blank">Donate</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import Search from './svg/Search'

  export default {
    name: 'VNav',
    components: { Search }
  }
</script>

<style lang="scss" scoped>
  nav {
    ul {
      list-style: none;

      li {
        display: inline-block;
        margin: 0 .5rem -1px 0;
        padding: 1rem .5rem;

        &:last-of-type {
          margin-right: 0;
        }

        a,
        a:visited,
        a:active {
          color: var(--color-black);
          padding: 1rem .5rem;

          &:hover {
            color: var(--color-quaternary);
            text-decoration: none;
          }

          &.router-link-active {
            border-bottom: solid 1px var(--color-black);
          }
        }
      }
    }
  }
</style>
