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
        const data = reactive(DEAFULT_STATE);

        /// computed
        const isReady = computed(()=>{
            return data.names.length > 1;
        })

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

        const getRandomName = () => {
            return data.names[Math.floor(Math.random() * data.names.length)];
        }
        const generateResult = () => {
            let rand = getRandomName();
            data.result = rand;
        }

        const showResults = () =>{
            generateResult()
            data.state = false;
        }

        return {
            data,
            addNameToList,
            removeName,
            isReady,
            showResults
        }
    }
}).mount('#app')