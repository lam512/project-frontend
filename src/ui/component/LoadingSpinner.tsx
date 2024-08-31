import {CircleSpinnerOverlay} from "react-spinner-overlay";

type Props = {
  loading : boolean
}

export default function LoadingSpinner({loading}:Props) {
  return(
    <>
      <CircleSpinnerOverlay
        color="#69696d"
        loading={loading}
        overlayColor="rgba(169,169,169,0.2)"/>
    </>
  )
}