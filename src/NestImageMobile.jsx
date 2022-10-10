export const NestImageMobile=({image})=>{
    return (
        <div className="nest-image">
          <button style={{border:'1px solid white',padding:0}}><img src={image} width={50} height={50} /></button>
        </div>
      );
}