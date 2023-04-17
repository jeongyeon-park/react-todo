import {atom} from 'recoil';
interface ITodoItem{
    id:number,
    name:string,
    status: "TO_DO"|"DONE"|"PENDING"
}

export const todoListState = atom({
    key:"todoListState",
    default:[] as ITodoItem[],
})

export const pendingListState = atom({
    key:"pendingListState",
    default: [] as ITodoItem[],
})

export const doneListState = atom({
    key:"doneListState",
    default: [] as ITodoItem[],
})

export const userNameState = atom({
    key:"userNameState",
    default: localStorage.getItem('name'),
})


