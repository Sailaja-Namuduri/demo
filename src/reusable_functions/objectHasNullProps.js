export function objectHasNullProps(obj){
    let array=Object.values(obj);
    let nullfind=(element)=>element=='';
    let result=array.some(nullfind);
    return result;
}