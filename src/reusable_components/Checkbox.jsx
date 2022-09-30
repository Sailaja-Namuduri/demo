export const Checkbox=({label,value,onChange})=>{
    return(
        <div>
            <input type="checkbox" checked={value} onChange={onChange}></input>{label}
        </div>
    )
}