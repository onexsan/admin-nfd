<template>
  <div class="admin-orders-list__item admin-orders-item">
    <div class="admin-orders-item__img">
      <img :src="require('@/assets/img/car-example.png')" alt="Car model" />
    </div>
    <div class="admin-orders-item__desc">
      <div class="admin-orders-item__main">
        <p><span>ELANTRA</span> в <span>Ульяновск</span>, Нариманова 42</p>
        <p>12.06.2019 12:00 — 13.06.2019 12:00</p>
        <p>Цвет: <span>Голубой</span></p>
      </div>

      <div class="admin-orders-item__extras">
        <div class="form-group-checkbox">
          <label class="checkbox checkbox--admin" for="extra-fuel">
            <input
              type="checkbox"
              class="checkbox__input"
              name="extra-fuel"
              id="extra-fuel"
            />
            <span class="checkbox__text">Полный бак</span>
            <span class="checkbox__icon"></span>
          </label>
        </div>
        <div class="form-group-checkbox">
          <label class="checkbox checkbox--admin" for="child-chair">
            <input
              type="checkbox"
              class="checkbox__input"
              name="child-chair"
              id="child-chair"
            />
            <span class="checkbox__text">Детское кресло</span>
            <span class="checkbox__icon"></span>
          </label>
        </div>
        <div class="form-group-checkbox">
          <label class="checkbox checkbox--admin" for="right-wheel">
            <input
              type="checkbox"
              class="checkbox__input"
              name="right-wheel"
              id="right-wheel"
            />
            <span class="checkbox__text">Правый руль</span>
            <span class="checkbox__icon"></span>
          </label>
        </div>
      </div>
      <div class="admin-orders-item__price">4300 ₽</div>
    </div>
    <div class="admin-orders-item__controls">
      <b-button-group>
        <b-button
          class="admin-orders-item__btn btn--confirm"
          variant="outline-primary"
          size="sm"
        >
          <span>Готово</span>
        </b-button>
        <b-button
          class="admin-orders-item__btn btn--cancel"
          variant="outline-primary"
          size="sm"
        >
          <span>Отмена</span>
        </b-button>
        <b-button
          class="admin-orders-item__btn btn--edit"
          variant="outline-primary"
          size="sm"
        >
          <span>Изменить</span>
        </b-button>
      </b-button-group>
    </div>
  </div>
</template>
