

const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'


// 这个就是reducer 处理函数，参数是状态和新的action
export function counter(state=0, action) {
	switch (action.type){
	  case ADD_GUN:
	    return state+1
	  case REMOVE_GUN:
	    return state-1
	  default:
	    return 10
	}
}

export function addGun() {
	return {type: ADD_GUN}
}

export function removeGun() {
	return {type: REMOVE_GUN}
}