import "./footerCard.css";
const FooterCategCard = ({title, arr}) =>{

return (
        <div>
            <div className="footerCardCateg">
              {title}
               {arr && arr.map((e,i)=>{
                   return (
                       <a key={i} href="">{e}</a>
                   )
               })}
            </div>
        </div>
    )
}

export default FooterCategCard