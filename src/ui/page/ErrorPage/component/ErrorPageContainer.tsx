import Background from "../../../img/browser-error-404-icon.svg";

export default function ErrorPageContainer(){
  return(
    <>
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"85vh"
    }}>
      <div style={{
        backgroundImage: `url(${Background})`,
        width:480,
        height:480,
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:"contain"
      }}>
      </div>
    </div>
    </>
  )
}