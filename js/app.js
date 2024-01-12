const { createApp, reactive, computed} = Vue;

const DEAFULT_STATE = {
    state:true,
    inputName:'',
    names:[],
    error:'',
    showError: false,
    result:''
}

createApp({
    setup(){
        const data = reactive(DEAFULT_STATE)

        /// methods
        const addNameToList = () => {
            
        }



        return {
            data
        }
    }
}).mount('#app')