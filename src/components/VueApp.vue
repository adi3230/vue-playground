<template>
    <div class="hg">
        <header class="hg__header">
            <a  href="#main-menu"
                class="menu-toggle"
                role="button"
                id="main-menu-toggle"
                aria-expanded="false"
                aria-controls="main-menu"
                aria-label="Open main menu">
                <span class="sr-only">Open main menu</span>
                <font-awesome-icon icon="bars" />
            </a>
            <h1 class="logo">Playground</h1>
            <nav    id="main-menu"
                    class="main-menu"
                    role="navigation"
                    aria-expanded="false"
                    aria-label="Main menu">
                <a  href="#main-menu-toggle"
                    class="menu-close"
                    role="button"
                    id="main-menu-close"
                    aria-expanded="false"
                    aria-controls="main-menu"
                    aria-label="Close main menu">
                    <span class="sr-only">Close main menu</span>
                    <font-awesome-icon icon="times" />
                </a>
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
					 <li>
                        <router-link to="/mutations">Array Mutations</router-link>
                    </li>
                </ul>
            </nav>
            <a  href="#main-menu-toggle"
                class="backdrop"
                tabindex="-1"
                aria-hidden="true"
                hidden></a>
        </header>
        <main class="hg__main">
            <router-view/>
        </main>
        <footer class="hg__footer">Footer</footer>
    </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes, faBars);

export default {
  components: {
    FontAwesomeIcon
  }
};
</script>

