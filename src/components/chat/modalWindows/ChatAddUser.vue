<template>
    <div class="modal-window_add-chat">
        <div class="modal-window_add-chat__title">
            <p>Добавить пользователя</p>
            <div class="modal-window_add-chat__close"></div>
        </div>
        <div class="modal-window_add-chat_search">
            <div class="modal-window_add-chat__icon-search"></div>
            <input type="text" placeholder="Поиск">
        </div>
        <div class="modal-window_add-chat_list">
            <div class="modal-window_add-chat_list__title">Мои контакты</div>
            <ul></ul>
        </div>
        <div class="modal-window_add-chat_actions">
            <button>Добавить</button>
            <button>Отмена</button>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>
    .modal-window_add-chat {
        min-width: 400px;
        height: auto;
        max-height: 90%;
        background: #fff;
        border-radius: 4px;
        padding: 24px 32px;
        z-index: 3;

        &__title {
            width: 100%;
            margin-bottom: 16px;
            font-weight: 700;
            font-size: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__close {
            width: 18px;
            height: 18px;
            background-image: url('@/assets/images/crossclose.svg');
            background-size: cover;
            cursor: pointer;
        }

        &_search {
            width: 100%;
            margin-bottom: 16px;
            background-color: #E9EDF5;
            padding: 16px;
            border-radius: 4px;

            input {
                border: none;
                color: var(--input-text-color);
                background-color: transparent;
                width: 100%;

                &::placeholder {
                    color: var(--input-placeholder-color)
                }
            }
        }

        &_list {
            width: 100%;
            margin-bottom: 16px;
        }
    }
</style>