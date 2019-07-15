import Ajax from '../utils/http';

const search = (data) =>  Ajax.post('/api/v1/recycle/list', data)

export default {
  search 
}