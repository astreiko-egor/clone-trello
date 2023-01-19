<template>
  <header class="header" v-on-click-outside="onCloseTheHeaderDropdown">
    <app-container class="header__container" size="big">
      <div class="header__content">
        <the-header-menu class="header__menu" :list-items="headerMenuItems" v-model="activeIndexDropdown"/>
        <the-header-menu-dropdown :is-show="activeIndexDropdown === index" v-for="(dropdown, index) in headerMenuItems" :key="index" v-bind="dropdown.dropdown"/>
      </div>
    </app-container>
  </header>
</template>

<script lang="ts" setup>
import {defineAsyncComponent, ref} from 'vue';
import {IHeaderMenuDropdown, IHeaderMenuLink} from '~/types/interfaceHeaderMenu'
const AppContainer = defineAsyncComponent(() => import('@/components/AppContainer/AppContainer.vue'))
const TheHeaderMenu = defineAsyncComponent(() => import('@/components/TheHeader/TheHeaderMenu/TheHeaderMenu.vue'))
const TheHeaderMenuDropdown = defineAsyncComponent(() => import('@/components/TheHeader/TheHeaderMenu/TheHeaderMenuDropdown/TheHeaderMenuDropdown.vue'))

type ListItems = {
  // Id пункта меню
  id?: string | number;
  link?: IHeaderMenuLink;
  // Дропдаун меню
  dropdown?: IHeaderMenuDropdown | null;
}

const headerMenuItems: ListItems[] = [
  {
    id: 0,
    link: {
      text: 'Возможности',
      iconAfterText: 'border-arrow-down'
    },
    dropdown: {
      primaryTitle: 'Изучите функции, которые помогут привести вашу команду к успеху.',
      primaryNavLinks: [
        {
          id: 0,
          to: '/',
          iconName: '',
          title: 'Представления',
          description: 'Отслеживайте работу над проектами своей команды, не упуская ни одной детали.'
        },
        {
          id: 1,
          to: '/',
          iconName: '',
          title: 'Автоматизация',
          description: 'Автоматизируйте задачи и рабочие процессы с помощью Butler.'
        },
        {
          id: 2,
          to: '/',
          iconName: '',
          title: 'Улучшения',
          description: 'Работайте эффективнее с плагинами Copy, подключив любимые инструменты команд.'
        },
        {
          id: 3,
          to: '/',
          iconName: '',
          title: 'Шаблоны',
          description: 'Используйте шаблоны от Copy Community и лидеров индустрии — путь к успеху станет проще.'
        },
        {
          id: 4,
          to: '/',
          iconName: '',
          title: 'Интеграции',
          description: 'Находите приложения, которыми ваша команда уже пользуется, или открывайте для себя новые способы эффективного решения задач с помощью Copy.'
        },
      ],
      secondaryTitle: 'Добро пожаловать в Copy',
      secondaryDescription: 'С Copy выполнять задачи в срок просто. Все ваши проекты и рабочие процессы будут организованы. Зарегистрируйтесь, создайте доску и вперед — за продуктивностью!',
      secondaryBtn: [
        {
          to: '/',
          text: 'Ознакомьтесь с возможностями Copy',
          className: ''
        }
      ]
    }
  },
  {
    id: 1,
    link: {
      text: 'Решения',
      iconAfterText: 'border-arrow-down'
    },
    dropdown: {
      primaryTitle: 'Изучите сборники сценариев Copy — они подходят для любых команд.',
      primaryNavLinks: [
        {
          id: 0,
          to: '/',
          iconName: '',
          title: 'Маркетинговые команды',
          description: 'Copy помогает командам по маркетингу добиться результатов в любых задачах: будь то запуск продукта, проведение кампании или создание контента.'
        },
        {
          id: 1,
          to: '/',
          iconName: '',
          title: 'Управление продуктами',
          description: 'Оптимизируйте проекты и процессы с помощью досок для управления и дорожных карт.'
        },
        {
          id: 2,
          to: '/',
          iconName: '',
          title: 'Команды по разработке',
          description: 'С Copy ваши разработчики будут писать код быстрее и качественнее.'
        },
        {
          id: 3,
          to: '/',
          iconName: '',
          title: 'Дизайнерские команды',
          description: 'Copy помогает дизайнерам оптимизировать поток задач и сотрудничество между командами.'
        },
        {
          id: 4,
          to: '/',
          iconName: '',
          title: 'Стартапы',
          description: 'Copy помогает небольшим компаниям и эффективно организовывать процессы, и увеличивать прибыль.'
        },
        {
          id: 5,
          to: '/',
          iconName: '',
          title: 'Дистанционные команды',
          description: 'Члены вашей команды будут слаженно работать, даже если находятся в разных уголках земли.'
        },
      ],
      primaryLinks: [
        {
          id: 0,
          text: 'Показать все команды',
          iconAfterText: ''
        }
      ],
      secondaryTitle: 'Наш продукт в действии',
      secondaryNavLinks: [
        {
          id: 0,
          title: 'Сценарий: ведение проекта',
          iconName: '',
          description: 'Отслеживайте сроки и выполнение задач. С Copy это просто!',
          to: '/'
        },
        {
          id: 1,
          title: 'Сценарий: брейнсторминг',
          iconName: '',
          description: 'Раскройте творческий потенциал своей команды с помощью полезных функций. Воплощайте идеи вместе.',
          to: '/'
        },
        {
          id: 2,
          title: 'Сценарий: встречи',
          iconName: '',
          description: 'Организуйте эффективные и нескучные встречи участников команд.',
          to: '/'
        }
      ],
      secondaryLinks: [
        {
          id: 0,
          text: 'Посмотреть все сценарии',
          iconAfterText: ''
        }
      ]
    }
  },
  {
    id: 2,
    link: {
      text: 'Планы',
      iconAfterText: 'border-arrow-down'
    },
    dropdown: {
      primaryNavLinks: [
        {
          id: 0,
          to: '/',
          iconName: '',
          title: 'Standard',
          description: 'Для команд, которые управляют большим количеством задач и масштабируют сотрудничество.'
        },
        {
          id: 1,
          to: '/',
          iconName: '',
          title: 'Premium',
          description: 'Идеально для команд до 100 участников. Решение помогает отслеживать несколько проектов и визуализировать процессы.'
        },
        {
          id: 2,
          to: '/',
          iconName: '',
          title: 'Enterprise',
          description: 'Все, что нужно вашим командам и администраторам для управления проектами.'
        },
      ],
      primaryBanners: [{
        id: 0,
        title: 'План Free',
        description: 'Удобная организация процессов для небольших команд и тех, кто работает один.',
        buttons: [
          {
            id: 0,
            text: 'Обзор возможностей Copy',
            className: ''
          }
        ]
      }],
      secondaryTitle: 'Сравните планы и цены',
      secondaryDescription: 'Неважно, сколько человек в вашей команде — 2 или 2000. Вы платите только за те функции, которые нужны вам.',
      secondaryBtn: [{
        id: 0,
        text: 'Перейти к ценам Copy',
        className: ''
      }]
    }
  },
  {
    id: 3,
    link: {
      to: '/',
      text: 'Цены',
    }
  },
  {
    id: 4,
    link: {
      text: 'Ресурсы',
      iconAfterText: 'border-arrow-down'
    },
    dropdown: {
      primaryNavLinks: [
        {
          id: 0,
          to: '/',
          title: 'Руководство Copy',
          description: 'С руководством по рабочим процессам вы станете экспертом по Copy в два счета!'
        },
        {
          id: 1,
          to: '/',
          title: 'Руководство по дистанционной работе',
          description: 'Полное руководство по успешной дистанционной работе команды.'
        },
        {
          id: 2,
          to: '/',
          title: 'Вебинары',
          description: 'Участвуйте в бесплатных вебинарах Copy и повышайте продуктивность!'
        },
        {
          id: 3,
          to: '/',
          title: 'Истории клиентов',
          description: 'Узнайте, как различные компании сделали Copy важной частью своего рабочего процесса.'
        },
        {
          id: 4,
          to: '/',
          title: 'Разработчики',
          description: 'С улучшением в Copy продуктивность вашей команды взлетит до небес!'
        },
        {
          id: 5,
          to: '/',
          title: 'Справочные ресурсы',
          description: 'Нужна помощь? Посмотрите статьи и ответы на часто задаваемые вопросы.'
        },
      ],
      secondaryTitle: 'Работать вместе. Работать лучше',
      secondaryDescription: 'Изучите сценарии Copy, подсказки для повышения продуктивности, лучшие методики для команд и советы экспертов по организации дистанционной работы.',
      secondaryBtn: [{
        id: 0,
        text: 'Почитайте блог Copy',
        className: ''
      }]
    }
  },
]

const activeIndexDropdown = ref(-1)

const onCloseTheHeaderDropdown = () => {
  activeIndexDropdown.value = -1;
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #ffffff;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    z-index: 2;
  }
}

.header__logo {
  max-width: 110px;
}

.header__content {
  z-index: 3;
}
</style>