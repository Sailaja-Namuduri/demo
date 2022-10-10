export const NestImage=({image})=>{
    return (
        <div className="nest-image">
          <button style={{border:'1px solid white',padding:0}}><img src={image} width={200} height={100}/></button>
        </div>
      );
}