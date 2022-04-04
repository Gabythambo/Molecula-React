import '../Pages/ContactPage.css'
const ContactPage = ()=>{

    return(
      <>
        {/* <!-- Main -->  */}
        <div className="content">
       
               <h1 className="logo">Contact <span>Us</span></h1>
       
               <div className="contact-wrapper animated bounceInUp">
                   <div className="contact-form">
                       <h3>Contact us</h3>
                       <form action="">
                           <p>
                               <label>NOMBRE</label>
                               <input className="input-form" type="text" name="fullname"/>
                           </p>
                           <p>
                               <label>E-MAIL</label>
                               <input className="input-form" type="email" name="email"/>
                           </p>
                           <p>
                               <label>TELEFONO</label>
                               <input className="input-form" type="tel" name="phone"/>
                           </p>
                           <p>
                               <label>OTRO</label>
                               <input className="input-form" type="text" name="affair"/>
                           </p>
                           <p className="block">
                              <label>MENSAJE</label> 
                               <textarea name="message" rows="3"></textarea>
                           </p>
                           <p className="block">
                               <button>
                                   ENVIAR
                               </button>
                           </p>
                       </form>
                   </div>
                   <div className="contact-info">
                       <h4>Mas Info</h4>
                       <ul>
                           <li><i className="fas fa-map-marker-alt"></i> Calle SempreViva</li>
                           <li><i className="fas fa-phone"></i> (111) 111 111 111</li>
                           <li><i className="fas fa-envelope-open-text"></i> contact@moleculainfusiones.com</li>
                       </ul>
                       <p>Si deseas consultar mas informacion sobre nuestros productos, podes escribirnos, te responderemos lo antes posible.</p>
                       <p>MoleculaInfusiones.com</p>
                   </div>
               </div>
       
           </div>
       
       {/* <!-- END MAIN --> */}
      </>

    )
}
export default ContactPage