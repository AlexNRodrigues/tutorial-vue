<template>
  <div>
    <NavBar v-once />
    <header>
      <slot name="cabecalho"></slot>
    </header>

    <main>
      <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup></script>

<style></style>
