<template>
     <label class="checkmark">
        <input type="checkbox" :name="nameCheckbox" @change="myChange" :checked="checked" />
        <span></span>
    </label>
</template>

<script>
export default {
    props: {
        nameCheckbox: {
            type: String,
            required: true
        },
        checked: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    emits: {
        handlerChange: null
    },
    methods: {
        myChange() {
            this.$emit('handlerChange');
        }
    }
}
</script>

<style lang="scss" scoped>
    .checkmark {
        position: relative;

        span {
            display: flex;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid #2E5599;
            background-size: cover;
        }

        input[type="checkbox"] {
            opacity: 0;
            position: absolute;
        }

        input:checked ~ span {
            background-color: #2E5599;

            &::after {
                position: absolute;
                content: "";
                left: 7px;
                top: 4px;
                width: 4px;
                height: 8px;
                border: solid #fff;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
            }
        }
    }
</style>