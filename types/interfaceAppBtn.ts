import {InterfaceAppLink} from "@/types/interfaceAppLink";

export interface InterfaceAppBtn extends InterfaceAppLink{
    // Нужно ли показать прелоадер
    isLoading?: boolean;
    // Активна ли кнопка
    isActive?: boolean;
    // Активная иконка перед текстом
    activeIconBeforeText?: string | null;
    // Активная иконка после текста
    activeIconAfterText?: string | null;
}