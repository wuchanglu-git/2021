export class NavItem{
    constructor(public name:string,public url:string){
    }
}
export type NavListValues= NavItem[]
export type PropsValues={}
export type StateValues={
    navList:NavListValues
}