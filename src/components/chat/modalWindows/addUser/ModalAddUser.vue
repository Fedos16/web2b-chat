<template>
    <div class="modal-window_search">
        <div class="modal-window__icon-search"></div>
        <input type="text" placeholder="Поиск">
    </div>
    <div class="modal-window_list my-scroll">
        <div class="modal-window_list__title">Мои контакты</div>
        <ul>
            <li>
                <div>
                    <img src="@/assets/images/tehSupport.svg" alt="">
                    <p>Олег Федин</p>
                </div>
                <label>
                    <input type="checkbox" name="user-name" />
                    <span></span>
                </label>
            </li>
            <li>
                <div>
                    <img src="@/assets/images/tehSupport.svg" alt="">
                    <p>Олег Федин</p>
                </div>
                <label>
                    <input type="checkbox" name="user-name" />
                    <span></span>
                </label>
            </li>
            <li>
                <div>
                    <img src="@/assets/images/tehSupport.svg" alt="">
                    <p>Олег Федин</p>
                </div>
                <label>
                    <input type="checkbox" name="user-name" />
                    <span></span>
                </label>
            </li>
            <li>
                <div>
                    <img src="@/assets/images/tehSupport.svg" alt="">
                    <p>Олег Федин</p>
                </div>
                <label>
                    <input type="checkbox" name="user-name" />
                    <span></span>
                </label>
            </li>
            <li>
                <div>
                    <img src="@/assets/images/tehSupport.svg" alt="">
                    <p>Олег Федин</p>
                </div>
                <label>
                    <input type="checkbox" name="user-name" />
                    <span></span>
                </label>
            </li>
            <li>
                <div>
                    <img src="@/assets/images/tehSupport.svg" alt="">
                    <p>Олег Федин</p>
                </div>
                <label>
                    <input type="checkbox" name="user-name" />
                    <span></span>
                </label>
            </li>
            <li>
                <div>
                    <img src="@/assets/images/tehSupport.svg" alt="">
                    <p>Олег Федин</p>
                </div>
                <label>
                    <input type="checkbox" name="user-name" />
                    <span></span>
                </label>
            </li>
            <li>
                <div>
                    <img src="@/assets/images/tehSupport.svg" alt="">
                    <p>Олег Федин</p>
                </div>
                <label>
                    <input type="checkbox" name="user-name" />
                    <span></span>
                </label>
            </li>
            <li>
                <div>
                    <img src="@/assets/images/tehSupport.svg" alt="">
                    <p>Олег Федин</p>
                </div>
                <label>
                    <input type="checkbox" name="user-name" />
                    <span></span>
                </label>
            </li>
            <li>
                <div>
                    <img src="@/assets/images/tehSupport.svg" alt="">
                    <p>Олег Федин</p>
                </div>
                <label>
                    <input type="checkbox" name="user-name" />
                    <span></span>
                </label>
            </li>
        </ul>
    </div>
    <div class="modal-window_actions">
        <button class="chat-button main-button margin-r--15">Добавить</button>
        <button class="chat-button secondary-button">Отмена</button>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>

    .modal-window_list {
        position: relative;
        width: 100%;
        margin-bottom: 16px;
        overflow: auto;

        &__title {
            width: 100%;
            position: sticky;
            top: 0px;
            color: #7D95BD;
            background-color: #fff;
            margin-bottom: 16px;
        }

        ul li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;

            img {
                margin-right: 8px;
            }

            div {
                display: flex;
                align-items: center;
            }

            input[type="checkbox"] {
                opacity: 0;
                position: absolute;
            }
            label {
                position: relative;

                span {
                    display: flex;
                    width: 20px;
                    height: 20px;
                    background-image: url('@/assets/images/state-off.svg');
                    background-size: cover;
                }

                input:checked ~ span {
                    background-image: url('@/assets/images/state-on.svg');
                }
            }
        }
    }
    .modal-window_search {
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
</style>