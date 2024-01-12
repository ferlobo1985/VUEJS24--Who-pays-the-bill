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

            if(validate(userName)){
                data.names.push(userName);
                data.inputName = '';
                data.showError = false;
            } else {
                data.showError = true;
            }
        }

        const validate = (value) => {
            data.error = '';
            if(value === ''){
                data.error = 'Sorry, no empty name'
                return false;
            }

            if(data.names.includes(value)){
                data.error = 'Sorry, names must be unique'
                return false;
            }
            return true
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