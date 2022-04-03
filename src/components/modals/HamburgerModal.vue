<template>
  <b-modal
    id="hamburger-modal"
    class="hamburger-modal"
    :hide-footer="true"
    :hide-header="true"
  >
    <div class="hamburger-modal__wrapper">
      <button
        class="hamburger-modal__close close-btn"
        @click="$bvModal.hide(`hamburger-modal`)"
      >
        <svg>
          <use xlink:href="#icon-close"></use>
        </svg>
      </button>
      <nav class="hamburger-modal__nav hamburger-nav">
        <ul class="hamburger-nav__list">
          <li class="hamburger-nav__item">
            <a href="#" class="hamburger-nav__link">Парковка</a>
          </li>
          <li class="hamburger-nav__item active">
            <a href="#" class="hamburger-nav__link">Страховка</a>
          </li>
          <li class="hamburger-nav__item">
            <a href="#" class="hamburger-nav__link">Бензин</a>
          </li>
          <li class="hamburger-nav__item">
            <a href="#" class="hamburger-nav__link">Обслуживание</a>
          </li>
        </ul>
      </nav>
      <div class="socials hamburger-modal__socials">
        <ul class="socials__list">
          <li class="socials__item">
            <a href="#" class="socials__link">
              <svg>
                <use xlink:href="#icon-tg" class="socials__icon"></use>
              </svg>
            </a>
          </li>
          <li class="socials__item">
            <a href="#" class="socials__link">
              <svg>
                <use xlink:href="#icon-fb" class="socials__icon"></use>
              </svg>
            </a>
          </li>
          <li class="socials__item">
            <a href="#" class="socials__link">
              <svg>
                <use xlink:href="#icon-ig" class="socials__icon"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <button class="hamburger-modal__lang-btn link link--lang">Eng</button>
    </div>
  </b-modal>
</template>
