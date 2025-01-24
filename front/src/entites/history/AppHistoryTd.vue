<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import AppCurrency from "@spared/AppCurrency.vue";
import AppButton from "@spared/AppButton.vue";
import AppAccordionHeader from "@spared/accordion/AppAccordionHeader.vue";
import AppAccordionBody from "@spared/accordion/AppAccordionBody.vue";
import {localeDate, localeNumber} from "@app/utils/locale.ts";
import {computed, ref} from "vue";

const props = defineProps(['data', 'modelValue'])
const emits = defineEmits(['update:modelValue'])
const isOpen = computed(() => props.data.id === props.modelValue)

const repeat = () => {
    console.log('repeat order')
}
</script>

<template>
    <div :class="['history-table__tbody', {active: isOpen}]">
        <app-accordion-header class="history-table__tr history-table__tr_hr history-table__header" @action="(val) => $emit('update:modelValue', val)" :active="modelValue" :value="data.id">
            <div class="history-table__td">{{ localeDate(data.date) }}</div>
            <div class="history-table__td history-table__name">№{{ data.number }}</div>
            <div class="history-table__td">
                <template v-if="data.bonus">
                    <span style="color: #499200">+{{ data.bonus.increment }}</span>
                    /
                    <span style="color: #FF0000">-{{ data.bonus.decrement }}</span>
                </template>
            </div>
            <div class="history-table__td">{{ localeNumber(data.total) }}
                <AppCurrency/>
            </div>
            <div class="history-table__td">{{ data.status }}</div>
            <div class="history-table__td history-table__show">
                {{ !isOpen ? 'Подробнее' : 'Скрыть' }}
                <AppSvg name="dropdown"/>
            </div>
        </app-accordion-header>
        <app-accordion-body :visible="isOpen">
            <div
                class="history-table__tr history-table__tr_hr"
                v-for="item in data.list"
                :key="item.id"
            >
                <div class="history-table__td">
                    <img :src="item.img" alt="">
                </div>
                <div class="history-table__td history-table__name">{{ item.name }}</div>
                <!--            <div class="history-table__td"></div>-->
                <div class="history-table__td">{{ localeNumber(item.price) }}
                    <AppCurrency/>
                </div>
                <div class="history-table__td">x{{ item.amount }}</div>
                <div class="history-table__td history-table__show"></div>
            </div>
            <div class="history-table__footer">
                <app-button size="big" @action="repeat">Повторить заказ</app-button>
            </div>
        </app-accordion-body>

    </div>

</template>