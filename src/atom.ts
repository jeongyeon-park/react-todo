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

