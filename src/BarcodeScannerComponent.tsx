import { useZxing } from "./useZxing";



const BarcodeScanner = ({
  onResult = () => { },
  onError = () => { },
}) => {
  const { ref } = useZxing({ onResult, onError });
  return <video ref={ ref } />;
};



export default BarcodeScanner;