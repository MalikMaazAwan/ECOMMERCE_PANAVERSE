// import { NextRequest,NextResponse } from "next/server";
// import Stripe from "stripe";


// const key = process.env.STRIPE_SECRET_KEY || "";
//     const stripe=new Stripe(key,{
//         apiVersion:"2022-11-15",
//     });


// export async function POST(request:NextRequest){
//     const body = await request.json();
//     console.log("body here :" , body.length);
//     try{
//         if(body.length>0){
//             const session = await stripe.checkout.sessions.create({
//                 submit_type:'pay',
//                 mode:"payment",
//                 payment_method_types:['card'],
//                 billing_address_collection:'auto',
//                 shipping_options:[
//                     {
//                         shipping_rate:"shr_1NR7YCGyzN9rtE5iWKvJV76G"
//                     },
//                     {
//                         shipping_rate:"shr_1NR7XBGyzN9rtE5iHil6o4cB"
//                     }
//                 ],
//                 line_items:body.map((item :any)=>{
//                     return {
//                         price_data:{
//                             currency:'pkr',
//                             product_data:{
//                                 name:item.name,
//                             },
//                             unit_amount:item.price * 100,
//                         },
                        
//                         quantity: item.quantity,
//                     };
                   
//                 }),
//                 phone_number_collection:{
//                     enabled: true,
//                 },
//                 success_url: `${request.headers.get("origin")}/?success=true`,
//                 cancel_url: `${request.headers.get("origin")}/?canceled=true`,
                
//             });
//                 NextResponse.redirect 
//             return NextResponse.json({session});
//         }
//         else {
//             return NextResponse.json({message:"No Data Found"})
//         }
       
//     } catch(err : any){
//         return NextResponse.json(err.message)
//     }
// }


//v2
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const key = process.env.STRIPE_SECRET_KEY || '';
const stripe = new Stripe(key, {
  apiVersion: '2022-11-15',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check if the request body contains a 'products' property and if it's an array
    if (Array.isArray(body.products) && body.products.length > 0) {
      const session = await stripe.checkout.sessions.create({
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          {
            shipping_rate: 'shr_1NR7YCGyzN9rtE5iWKvJV76G',
          },
          {
            shipping_rate: 'shr_1NR7XBGyzN9rtE5iHil6o4cB',
          },
        ],
        line_items: body.products.map((item: any) => ({
          price_data: {
            currency: 'pkr',
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        })),
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get('origin')}/?success=true`,
        cancel_url: `${request.headers.get('origin')}/canceled=true`,
      });

      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: 'No Data Found' });
    }
  } catch (err: any) {
    console.error('Error:', err.message);
    return NextResponse.json({ error: 'Something went wrong' });
  }
}


