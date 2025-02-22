<script setup lang="ts">
import {branchesActive} from "@app/store/block";
import {useStore} from "@nanostores/vue";
import {computed, reactive} from "vue";

const props = defineProps(['requisite', 'page', 'delivery', 'payment'])

const $branchesActive = useStore(branchesActive)
const pages = reactive({
    contacts: [
        {
            label: 'Адрес',
            value: $branchesActive.value.city + ', ' + $branchesActive.value.street
        },
        {
            label: 'Телефон',
            value: $branchesActive.value.phone,
            link: 'tel'
        },
        {
            label: 'Реквизиты',
            value: props.requisite,
            big: true
        },
        {
            label: 'Режим Работы',
            value: $branchesActive.value.mode,
        },
        {
            label: 'E-Mail',
            value: $branchesActive.value.email,
            link: 'mailto'
        },
    ],
    delivery: [
        {
            label: 'Режим Работы',
            value: $branchesActive.value.mode,
        },
        {
            label: 'Телефон',
            value: $branchesActive.value.phone,
            link: 'tel'
        },
        {
            label: 'Реквизиты',
            value: props.requisite,
            big: true
        },
        {
            label: 'Доставка',
            value: props.delivery
        },
        {
            label: 'Оплата',
            value: props.payment
        },
    ],
})

const page = computed(() => pages[props.page])

</script>

<template>
    <div class="contacts">
        <div
                :class="['contacts__group', {'contacts__group_big': item.big}]"
                v-for="item in page"
                :key="item.label"
        >
            <div class="contacts__label">{{ item.label }}</div>

            <template v-if="typeof item.value === 'object'">
                <template v-for="el in item.value">
                    <component class="contacts__value" :is="el.link ? 'a' : 'span'" :href="el.link + ':' + el.text">
                        {{ el.text }}
                    </component>
                    <br>
                </template>
            </template>
            <template v-else>
                <template v-if="item.link">
                    <div class="contacts__value">
                        <a :href="item.link + ':' + item.value">{{ item.value }}</a>
                    </div>
                </template>
                <div v-else class="contacts__value" v-html="item.value"></div>
            </template>

        </div>
    </div>
  <!--    <p>{{ page }}</p>-->
</template>

<style lang="scss">
@use "@style/media";

.contacts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--width, 30%), 1fr));
  grid-gap: 30px;

  @include media.respond-to(640) {
    --width: 40%;
  }
  @include media.respond-to(360) {
    grid-gap: 20px;
    --width: 100%;
  }

  &__group {
    &_big {
      grid-row: span 2;
      @include media.respond-to(640) {
        order: 1;
        grid-row: auto;
      }
    }
  }

  &__label {
    margin-bottom: 10px;
    color: var(--text-color-2);
    @include media.respond-to(640) {
      font-size: media.sizeREM(15);
    }
  }

  &__value {
    font-size: media.sizeREM(20);
    line-height: 140%;

    @include media.respond-to(960) {
      font-size: media.sizeREM(18);
    }
    @include media.respond-to(640) {
      font-size: media.sizeREM(16);
    }

    p {
      color: var(--text-color-1);
    }
  }
}
</style>