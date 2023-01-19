import {RouteLocationNamedRaw, RouteLocationPathRaw, RouteLocationRaw} from "vue-router";

export interface InterfaceAppLink {
    // Ссылка или объект на внутренний ресурс
    to?: string | RouteLocationRaw | RouteLocationPathRaw | RouteLocationNamedRaw | undefined;
    // Иконка перед текстом
    iconBeforeText?: string | null;
    // Текст ссылки
    text?: string | null;
    // Иконка после текста
    iconAfterText?: string | null;
}