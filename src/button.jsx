
const Button=({text,handeleclick})=>{
    return(
        <>
      
        <button onClick={handeleclick}className=" p-1 ml-4 bg-gray-100 rounded-md w-[100px] h-[50px]">{text}</button>
        </>
    )
}
export default Button;