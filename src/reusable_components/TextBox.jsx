export const TextBox=({refer,spanLabel,name,fnChange,isShowError,errorMsg})=>{
    return(
        <>
            <div className='row p-2'>
                <div className='d-none d-md-block col-md-6 col-lg-6 text-end'>
                    <span >{spanLabel}</span>
                </div>
                <div className='d-none d-md-block col-md-6 col-lg-6 text-start'>
                    <input ref={refer} onChange={fnChange} name={name}multiple accept="image/*"/>
                </div>
                <span>{isShowError && <b className="text-danger">{errorMsg}</b>}</span>
            </div>
        </>
    )
}