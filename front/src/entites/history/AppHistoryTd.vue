<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import AppCurrency from "@spared/AppCurrency.vue";
import {localeDate, localeNumber} from "@app/utils/locale.ts";
import {ref} from "vue";

defineProps(['data'])
const isOpen = ref(false)
</script>

<template>
    <div class="history-table__tbody">
        <div :class="['history-table__tr history-table__header', {active: isOpen}]" @click="isOpen = !isOpen">
            <div class="history-table__td">{{ localeDate(data.date) }}</div>
            <div class="history-table__td">№{{ data.number }}</div>
            <div class="history-table__td">
                <template v-if="data.bonus">
                    <span style="color: #499200">+{{ data.bonus.increment }}</span>
                    /
                    <span style="color: #FF0000">-{{ data.bonus.decrement }}</span>
                </template>
            </div>
            <div class="history-table__td">{{ localeNumber(data.total) }} <AppCurrency/></div>
            <div class="history-table__td">{{ data.status }}</div>
            <div class="history-table__td">
                <div class="history-table__show">
                    {{ !isOpen ? 'Подробнее' : 'Скрыть' }}
                    <AppSvg name="dropdown"/>
                </div>
            </div>
        </div>
    </div>
    <div class="history-table__tbody" v-if="isOpen">
        <div
            class="history-table__tr"
            v-for="item in data.list"
            :key="item.id"
        >
            <div class="history-table__td">
                <img :src="item.img" alt="">
            </div>
            <div class="history-table__td history-table__name">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda, beatae corporis ducimus eius eos ex inventore iste magni minus molestiae nostrum odio qui sequi temporibus tenetur, ut velit, voluptate!</div>
<!--            <div class="history-table__td"></div>-->
            <div class="history-table__td">{{ localeNumber(item.price) }} <AppCurrency/></div>
            <div class="history-table__td">x{{ item.amount }}</div>
            <div class="history-table__td"></div>
        </div>
    </div>
</template>