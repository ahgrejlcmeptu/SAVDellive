<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import AppSocials from "@entites/socials/AppSocials.vue";

const NAV = {
    menu: [
        {
            id: '1',
            name: 'Роллы'
        },
        {
            id: '2',
            name: 'Наборы'
        },
        {
            id: '3',
            name: 'Суши'
        },
        {
            id: '4',
            name: 'Салаты'
        },
        {
            id: '5',
            name: 'Блюда гриль'
        },
        {
            id: '6',
            name: 'Горячие блюда'
        },
        {
            id: '7',
            name: 'Пицца'
        },
        {
            id: '8',
            name: 'Супы'
        },
        {
            id: '9',
            name: 'Десерты'
        },
        {
            id: '10',
            name: 'Напитки'
        },
        {
            id: '11',
            name: 'Соусы'
        },
    ],
    links: [
        {
            id: '1',
            name: 'О нас'
        },
        {
            id: '2',
            name: 'Доставка и оплата'
        },
        {
            id: '3',
            name: 'Отзывы'
        },
        {
            id: '4',
            name: 'Контакты'
        },
    ]
}
</script>

<template>
    <div class="footer-top container">
        <div class="footer__column_one footer-top__item footer-top__item_first">
            <div class="footer-top__logo">
                <a href="/">
                    <app-svg name="logo"/>
                </a>
            </div>
        </div>
        <div class="footer__column_two footer-top__item footer-top__item_contacts">
            <h3>Свяжитесь с нами</h3>
            <ul>
                <li>
                    <a href="tel:+74997556493">+7 499 755-64-93</a>
                </li>
                <li>
                    Иркутск, <br>
                    Академика Курчатова 3
                </li>
                <li>
                    <a href="mailto:info@dellive.ru">info@dellive.ru</a>
                </li>
            </ul>
            <app-socials/>
            <div class="footer-top__banks">
                <img src="/img/banks/1.png" alt="">
                <img src="/img/banks/2.png" alt="">
                <img src="/img/banks/3.png" alt="">
            </div>
        </div>
        <div class="footer__column_three footer-top__item footer-top__item_menu">
            <h3>Наше меню</h3>
            <ul>
                <li v-for="item in NAV.menu" :key="item.id">
                    <a href="#">{{ item.name }}</a>
                </li>
            </ul>
        </div>
        <div class="footer__column_four footer-top__item footer-top__item_links">
            <h3>Ресторан</h3>
            <ul>
                <li v-for="item in NAV.links" :key="item.id">
                    <a href="#">{{ item.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.footer-top {
  position: relative;
  padding-top: 60px;
  padding-bottom: 40px;
  display: flex;
  gap: 30px;
  justify-content: space-between;
  @include media.respond-to(960) {
    padding-top: 70px;
    padding-bottom: 50px;
  }
  @include media.respond-to(360) {
    padding-top: 50px;
    padding-bottom: 30px;
  }

  &__logo {
    svg {
      width: 130px;
      height: 30px;
      fill: var(--text-color-5);
      stroke: var(--main-color-1);
    }
  }

  &__item {
    @include media.respond-from(960) {
      flex-grow: 1;
    }
    @include media.respond-to(960) {
      width: 100%;
      ul {
        display: flex;
        justify-content: space-between;
        max-width: 600px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;

        @include media.respond-to(360) {
          flex-direction: column;
          gap: 20px;
        }

        br {
          display: none;
        }

        li {
          margin-bottom: 0;
        }
      }
      &_first,
      &_menu,
      &_links {
        display: none;
      }
    }

    &_menu {
      ul {
        columns: 2 auto;
        column-gap: 30px;
      }
    }
  }

  &__banks {
    margin-top: 80px;
    display: flex;
    align-items: center;
    gap: 20px;
    @include media.respond-to(960) {
      display: none;
    }
  }

  h3 {
    text-transform: uppercase;
    margin-bottom: 40px;
    @include media.respond-to(960) {
      display: none;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    font-size: media.sizeREM(15);
    color: var(--text-color-2);
  }

  li {
    margin-bottom: 10px;
  }

  .socials {
    margin-top: 30px;
    @include media.respond-to(960) {
      position: absolute;
      margin-top: 0;
      left: 50%;
      top: 0;
      transform: translate(-50%, -50%);
      background-color: var(--main-white);
      padding: 0 20px;
    }
  }
}
</style>