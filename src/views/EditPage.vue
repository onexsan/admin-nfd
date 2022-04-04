<template>
  <div class="admin-content">
    <h1 class="admin-title">Карточка автомобиля</h1>
    <div class="admin-edit">
      <form class="admin-edit__card admin-block p-0 edit-card">
        <div class="form-group edit-card__header">
          <div class="edit-card__image">
            <img :src="require('@/assets/img/car-example.png')" alt="" />
          </div>
          <div class="edit-card__title">Hyndai, i30 N</div>
          <div class="edit-card__subtitle">Компакт-кар</div>
          <div class="edit-card__load">
            <b-form-file accept="image/*" size="sm"></b-form-file>
          </div>
        </div>
        <div class="edit-card__progress edit-card-progress form-group">
          <div class="edit-card-progress__desc">
            <div class="edit-card__label">Заполнено</div>
            <span class="edit-card-progress__percent">75%</span>
          </div>
          <b-progress :value="75"></b-progress>
        </div>
        <div class="edit-card__description form-group">
          <div class="edit-card__label"><b>Описание</b></div>
          <div class="edit-card__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque,
            quidem, commodi soluta qui quae quod dolorum sint alias, possimus
            illum assumenda eligendi cumque?
          </div>
        </div>
      </form>
      <form class="admin-edit__main admin-block edit-main">
        <fieldset class="edit-main__inputs">
          <legend class="edit-main__legend">Настройки автомобиля</legend>
          <b-row>
            <b-col>
              <div class="form-group">
                <label for="model" class="label">Модель автомобиля</label>
                <input
                  type="text"
                  name="model"
                  id="model"
                  class="text-input"
                  placeholder="Укажите модель"
                />
              </div>
            </b-col>
            <b-col>
              <div class="form-group">
                <label for="type" class="label">Тип автомобиля</label>
                <input
                  type="text"
                  name="type"
                  id="type"
                  class="text-input"
                  placeholder="Укажите тип"
                />
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="form-group">
                <label for="colors" class="label">Доступные цвета</label>
                <input
                  type="text"
                  name="colors"
                  id="colors"
                  class="text-input"
                  placeholder="Укажите цвет"
                />
              </div>
              <div class="form-group-checkbox">
                <label class="checkbox checkbox--blue" for="color1">
                  <input
                    type="checkbox"
                    class="checkbox__input"
                    name="color1"
                    id="color1"
                  />
                  <span class="checkbox__text">Красный</span>
                  <span class="checkbox__icon"></span>
                </label>
              </div>
              <div class="form-group-checkbox">
                <label class="checkbox checkbox--blue" for="color2">
                  <input
                    type="checkbox"
                    class="checkbox__input"
                    name="color2"
                    id="color2"
                  />
                  <span class="checkbox__text">Белый</span>
                  <span class="checkbox__icon"></span>
                </label>
              </div>
              <div class="form-group-checkbox">
                <label class="checkbox checkbox--blue" for="color3">
                  <input
                    type="checkbox"
                    class="checkbox__input"
                    name="color3"
                    id="color3"
                  />
                  <span class="checkbox__text">Чёрный</span>
                  <span class="checkbox__icon"></span>
                </label>
              </div>
            </b-col>
          </b-row>
        </fieldset>
        <fieldset class="edit-main__controls edit-main-controls">
          <div class="edit-main-controls__group">
            <button class="btn btn-primary" type="submit">Сохранить</button>
            <button class="btn btn-secondary" type="submit">Отменить</button>
          </div>
          <div class="edit-main-controls__group">
            <button class="btn btn-delete">Удалить</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<style>
.admin-content,
.admin-edit {
  height: 100%;
}
</style>
