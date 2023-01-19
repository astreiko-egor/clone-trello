<template>
  <header class="header">
    <app-container class="header__container" size="big">
      <div class="header__content">
        <the-logo class="header__logo"/>
        <the-header-menu class="header__menu" :list-items="headerMenuItems"/>
      </div>
    </app-container>
  </header>
</template>

<script lang="ts" setup>
import {defineAsyncComponent} from 'vue';
import {IHeaderMenuDropdown, IHeaderMenuLink} from '~/types/interfaceHeaderMenu'

const AppContainer = defineAsyncComponent(() => import('@/components/AppContainer/AppContainer.vue'))
const TheLogo = defineAsyncComponent(() => import('@/components/TheLogo/TheLogo.vue'))
const TheHeaderMenu = defineAsyncComponent(() => import('@/components/TheHeader/TheHeaderMenu/TheHeaderMenu.vue'))

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
          description: 'Работайте эффективнее с плагинами Trello, подключив любимые инструменты команд.'
        },
        {
          id: 3,
          to: '/',
          iconName: '',
          title: 'Шаблоны',
          description: 'Используйте шаблоны от Trello Community и лидеров индустрии — путь к успеху станет проще.'
        },
        {
          id: 4,
          to: '/',
          iconName: '',
          title: 'Интеграции',
          description: 'Находите приложения, которыми ваша команда уже пользуется, или открывайте для себя новые способы эффективного решения задач с помощью Trello.'
        },
      ],
      secondaryTitle: 'Добро пожаловать в Trello',
      secondaryDescription: 'С Trello выполнять задачи в срок просто. Все ваши проекты и рабочие процессы будут организованы. Зарегистрируйтесь, создайте доску и вперед — за продуктивностью!',
      secondaryBtn: [
        {
          to: '/',
          text: 'Ознакомьтесь с возможностями Trello',
          className: ''
        }
      ]
    }
  },
  {
    id: 1,
    link: {
      text: 'Решения',
    },
    dropdown: {
      primaryTitle: 'Изучите сборники сценариев Trello — они подходят для любых команд.',
      primaryNavLinks: [
        {
          id: 0,
          to: '/',
          iconName: '',
          title: 'Маркетинговые команды',
          description: 'Trello помогает командам по маркетингу добиться результатов в любых задачах: будь то запуск продукта, проведение кампании или создание контента.'
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
          description: 'С Trello ваши разработчики будут писать код быстрее и качественнее.'
        },
        {
          id: 3,
          to: '/',
          iconName: '',
          title: 'Дизайнерские команды',
          description: 'Trello помогает дизайнерам оптимизировать поток задач и сотрудничество между командами.'
        },
        {
          id: 4,
          to: '/',
          iconName: '',
          title: 'Стартапы',
          description: 'Trello помогает небольшим компаниям и эффективно организовывать процессы, и увеличивать прибыль.'
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
          description: 'Отслеживайте сроки и выполнение задач. С Trello это просто!',
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
            text: 'Обзор возможностей Trello',
            className: ''
          }
        ]
      }],
      secondaryTitle: 'Сравните планы и цены',
      secondaryDescription: 'Неважно, сколько человек в вашей команде — 2 или 2000. Вы платите только за те функции, которые нужны вам.',
      secondaryBtn: [{
        id: 0,
        text: 'Перейти к ценам Trello',
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
    },
    dropdown: {
      primaryNavLinks: [
        {
          id: 0,
          to: '/',
          title: 'Руководство Trello',
          description: 'С руководством по рабочим процессам вы станете экспертом по Trello в два счета!'
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
          description: 'Участвуйте в бесплатных вебинарах Trello и повышайте продуктивность!'
        },
        {
          id: 3,
          to: '/',
          title: 'Истории клиентов',
          description: 'Узнайте, как различные компании сделали Trello важной частью своего рабочего процесса.'
        },
        {
          id: 4,
          to: '/',
          title: 'Разработчики',
          description: 'С улучшением в Trello продуктивность вашей команды взлетит до небес!'
        },
        {
          id: 5,
          to: '/',
          title: 'Справочные ресурсы',
          description: 'Нужна помощь? Посмотрите статьи и ответы на часто задаваемые вопросы.'
        },
      ],
      secondaryTitle: 'Работать вместе. Работать лучше',
      secondaryDescription: 'Изучите сценарии Trello, подсказки для повышения продуктивности, лучшие методики для команд и советы экспертов по организации дистанционной работы.',
      secondaryBtn: [{
        id: 0,
        text: 'Почитайте блог Trello',
        className: ''
      }]
    }
  },
]

</script>

<style lang="scss" scoped>
.header__logo {
  max-width: 110px;
}
</style>