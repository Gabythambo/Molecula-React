import { CartContext } from "../Components/Context/CartContext"
import { useContext, useState } from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import db from "../fireBaseConfig"
import { addDoc,collection} from "firebase/firestore"


const Cart = ({children})=>{
    const {cartArray, delItem, total, clearCart}=useContext(CartContext)
    const {name,thumbnail,price,id,cantidad}=cartArray
    
    const [formData,setFormData]=useState({ 
        name:'',
        phone:'',
        email:'',
        })
 
     const [order,setOrder]=useState(
        {
            buyer:{ 
                name:'',
                phone:'',
                email:'',
                },
            items:cartArray.map((cartArray)=>{
                const{id,name,price,cantidad}=cartArray
                return{
                    id:id,
                    name:name,
                    price:price,
                    cantidad:cantidad
                }
            }),
            date:'',
            total:total()
        }
        )

        const [successOrder,setSuccesOrder]=useState()
        const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
            })
                console.log(e.target.name)
       
        }

        const handleSubmit = (e)=>{
          
            e.preventDefault() 
            
            setOrder({
                ...order,
                buyer:formData
            })
            pushOrder()
                    }

        const pushOrder= async()=>{
        const orderFireBase = collection(db,'order')
        const orderDoc = await addDoc(orderFireBase,order)
        setSuccesOrder(orderDoc.id)
        console.log(orderDoc.id)
        clearCart() 
         }
     /* muestra orden procesada*/   
    return(
         <div className="cart">
         <section class="py-0">
         {successOrder?(
                <>
                   <div class="jumbotron text-center">
            <h1 class="display-3">Thank You!</h1> 
            <p>Your purchase was successful under code: {successOrder}</p>
            <p class="lead"><strong>Please check your email</strong> for further instructions on how to complete your shopping</p>
            <Link to="/"> <Button>Continue to homepage</Button></Link>
        </div>
                </>
                ):(
                <>
                <div class="container px-4 px-lg-5 my-5">
                <div class="row">
                <div class="col-lg-12 p-1 bg-white rounded shadow-sm mb-5">
                   
                    <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col" class="border-0 bg-light">
                            <div class="p-2 px-3 text-uppercase">Product</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Price</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Quantity</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Remove</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                {(cartArray.length === 0 )
                    &&
                    <>
                    <h4>Empty cart</h4>
                    <Link to="/"> <Button>Continue to homepage</Button></Link>
                    </>
                }       
                        {                        
                              
                        cartArray.map((items) =>{
                            return ( 
                            <tr key={items.id}>
                            <th scope="row" class="border-0">
                            <div class="p-2">
                                <img src={items.thumbnail} alt="" width="70" class="img-fluid rounded shadow-sm" />
                                <div class="ms-3 d-inline-block align-middle">
                                <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">{items.name}</a></h5>
                                </div>
                            </div>
                            </th>
                            <td class="border-0 align-middle"><strong>{items.price}</strong></td>
                            <td class="border-0 align-middle"><strong>{items.cantidad}</strong></td>
                            <td class="border-0 align-middle"><a href="#" class="text-dark"onClick={()=>{delItem(items.id)}}><i class="bi bi-trash"></i></a></td>
                        </tr>
                            )})
                        }
                        </tbody>
                    </table>
                </div>   
                </div>
                </div>
                
                
            <div class="row py-5 p-4 bg-white rounded shadow-sm">
             
                    
            <div class="col-lg-6">
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Buyer</div>
                    <div class="p-4">
                    <p class="mb-4"><em>Please enter your name in the box below.</em></p>
                    <div class="input-group mb-4 border rounded-pill p-2">
                        <input type="text" name="name" value={formData.name} placeholder="complete name" onChange={handleChange} aria-describedby="button-addon3" class="form-control border-0" />
                        <div class="input-group-append border-0">
                        </div>
                    </div>
                    </div>
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Phone Contact</div>
                    <div class="p-4">
                    <p class="mb-4"><em>Please enter your email in the box below.</em></p>
                    {/* <textarea name="" cols="30" rows="2" class="form-control"></textarea> */}
                    <input type="email" name="email" value={formData.email} placeholder="User@mail.com" onChange={handleChange} aria-describedby="button-addon3" class="form-control border-0" />
                    </div>
                </div>
                <div class="col-lg-6">
                   <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">E-mail Contact</div>
                    <div class="p-4">
                    <p class="mb-4"><em>Please enter your phone number in the box below.</em></p>
                    <input type="text" name="phone" value={formData.phone} placeholder="+34 467 857 372" onChange={handleChange} aria-describedby="button-addon3" class="form-control border-0" />
                   
                <ul class="list-unstyled mb-4">
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>${total()}</strong></li>
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>Free</strong></li>
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                        <h5 class="fw-bold">${total()}</h5>
                        </li>
                    </ul><button onClick={handleSubmit} class="btn btn-dark rounded-pill py-2 d-md-block">Procceed to checkout</button>
                    </div>
                </div>
                </div>
            </div>
            </>)}
            </section>  
        </div>
    )
}
export default Cart