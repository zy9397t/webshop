import {GETSTORES} from './mutation_types'
import {getStores} from 'api'
export default {
    async [GETSTORES]({commit}){
        const result = await getStores()
        if(!result.code){
            // console.log(result.data)
            commit(GETSTORES,result.data)
        }
    }
}