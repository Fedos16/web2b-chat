<template>
    <div class="chat-body_header">
        <div class="chat-body_header_user-info">
            <div class="chat-body_header_user-info__avatar">
                <img src="@/assets/images/tehSupport.svg" alt="">
            </div>
            <div class="chat-body_header_user-info__user-name">
                <b>Олег Федин</b>
                <p>Пользователь</p>
            </div>
        </div>
        <div class="chat-body_header_actions">
            <div class="chat-body_header_actions__item">
                <img src="@/assets/images/search.svg" alt="">
            </div>
            <div class="chat-body_header_actions__item">
                <img src="@/assets/images/menu.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .chat-body_header {
        width: 100%;
        min-height: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        border-bottom: 1px solid var(--border-color);
        user-select: none;
    }
    .chat-body_header_user-info {
        display: flex;
    }
    .chat-body_header_user-info__avatar {
        margin-right: 12px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
    .chat-body_header_user-info__avatar img {
        width: auto;
    }
    .chat-body_header_user-info__user-name {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .chat-body_header_user-info__user-name b {
        font-size: 18px;
        font-weight: 700;
        color: #102447;
    }
    .chat-body_header_user-info__user-name p {
        font-size: 12px;
        color: #102447;
    }

    .chat-body_header_actions {
        display: flex;
        align-items: center;
    }
    .chat-body_header_actions__item {
        display: flex;
        align-items: center;
        margin-right: 10px;
    }
    .chat-body_header_actions__item:last-child {
        margin-right: 0px;
    }

</style>