export default function Exponent ({num, exponent}) {
  
  return( 
    <div className="exponent-counter-container">
     <p className="exponent-label"> {num} <sup>{exponent}</sup> </p>
     {num} {`* ${num}`.repeat(exponent-1)} = <span className="total">{num ** exponent}</span>
   </div>
  )

}