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
            const userName = data.inputName;

            data.names.push(userName);
            data.inputName = '';

            console.log(data.names)

        }


        const removeName = (index) => {
            data.names.splice(index,1)
        }



        return {
            data,
            addNameToList,
            removeName
        }
    }
}).mount('#app')