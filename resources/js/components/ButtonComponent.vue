<template>
    <button @click="handleClick" class="btn" :class="btnToApply" type="button" v-html="btnType.text"></button>
</template>

<script>
export default {
    props: {
        btnType: {
            type: Object,
            default: () => {
                return {
                    text: 'Button',
                    type: 'primary',
                    context: '',
            }
            },
        },
    },
    computed: {
        btnToApply(){
            return "btn-"+this.btnType.type
        }
    },
    methods: {
        handleClick() {
            this.$emit('click')
        }
    }
}
</script>

<style>
.btn {
    min-width: min-content;
    max-width: fit-content;
    padding: 0.5rem 0.75rem;
}
</style>