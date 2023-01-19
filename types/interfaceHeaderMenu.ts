import {RouteLocationNamedRaw, RouteLocationPathRaw, RouteLocationRaw} from "vue-router";

export interface IHeaderMenuLink {
    // Id
    id?: string | number;
    // Ссылка или объект на внутренний ресурс
    to?: string | RouteLocationRaw | RouteLocationPathRaw | RouteLocationNamedRaw | undefined;
    // Открывать ли ссылку в новой вкладке
    target?: boolean;
    // Иконка перед текстом
    iconBeforeText?: string | null;
    // Активная иконка перед текстом
    activeIconBeforeText?: string | null;
    // Текст ссылки
    text?: string | null;
    // Иконка после текста
    iconAfterText?: string | null;
    // Активная иконка после текста
    activeIconAfterText?: string | null;
}
interface IBtn extends IHeaderMenuLink {
    className?: string;
}

export interface IHeaderMenuDropdownNavLink {
    // Id
    id?: number | string;
    // Ссылка
    to?: string | null;
    // Название иконки
    iconName?: string | null;
    // Название
    title?: string | null;
    // Описание
    description?: string | null;
}

interface IHeaderMenuDropdownBanner extends Exclude<IHeaderMenuDropdownNavLink, 'to'> {
    // Массив кнопок
    buttons?: IBtn[]
}

export interface IHeaderMenuDropdown {
    // Заголовок в левой колонке
    primaryTitle?: string;
    // Описание в левой колонке
    primaryDescription?: string;
    // Массив навигационных ссылок в левой колонке
    primaryNavLinks?: IHeaderMenuDropdownNavLink[];
    // Массив ссылок в левой колонке
    primaryLinks?: IHeaderMenuLink[];
    // Массив кнопок в левой колонке
    primaryBtn?: IBtn[];
    // Баннер в левой колонке
    primaryBanners?: IHeaderMenuDropdownBanner[];
    // Заголовок в правой колонке
    secondaryTitle?: string;
    // Описание в правой колонке
    secondaryDescription?: string;
    // Массив ссылок в правой колонке
    secondaryNavLinks?: IHeaderMenuDropdownNavLink[],
    // Массив ссылок в правой колонке
    secondaryLinks?: IHeaderMenuLink[];
    // Массив кнопок в правой колонке
    secondaryBtn?: IBtn[];
    // Баннер в правой колонке
    secondaryBanners?: IHeaderMenuDropdownBanner[];
}