import aria2 from '../aria2/index'
let initState = {

}
function api(state = initState,action){
  switch(action.type){
    case 'addTask':
      let params = [
        ['aria2.addUri',['https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'],{dir: "/Users/zhaojin11/Downloads",split: 16}]
      ]
      aria2.addUri(params)
      .then((res) => {
        console.log(res);
      })
      
      return state
    default:
      return state
  }
}
export default api