import axios from 'axios';
const baseUrl="http://localhost:8001"
class FruitService{
    getFruit(){
        return axios.get(baseUrl+"/fruits")
      
    }
    insertFruit(fruit){
        return axios.post(baseUrl+"/fruits/insert/"+fruit.fid,fruit)
    }
    deleteFruit(fid){
        return axios.delete(baseUrl+"/fruits/delete/"+fid)
    }

    updateFruit(fruit){
        return axios.put(baseUrl+"/fruits/update/"+fruit.fid,fruit)
    }
}
export default new FruitService();