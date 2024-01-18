import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/app/libs/stripe";
import prismadb from "@/app/libs/prismadb";

const corsHeaders ={
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":"Content-Type,Authorization"
};
export async function OPTIONS(){
    return NextResponse.json({},{headers:corsHeaders});
}

export async function POST(req:Request,{params}:{params:{listingId:string}}){
    const { productIds } = await req.json();
    if(!productIds || productIds.length === 0){
        return new NextResponse("Product Ids are required",{status:400});
    }
    const products =await prismadb.listing.findMany({
        where:{
            id:{
                in:productIds
            }
        }
    });

    const line_items:Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    products.forEach((product) => {
        line_items.push({
            quantity:1,
            price_data:{
                currency:"USD",
                product_data:{
                    name:product.title
                },
                unit_amount:product.price *100
            }
        });
    });

    const order = await prismadb.listing.create({
        data:{
            listingId:params.listingId,
            isPaid:false,
            orderItems:{
                create:productIds.map((productId:string) => ({
                      product:{
                            connect:{
                                id:productId
                            }
                      }
                }))
            }
        }
    });
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode:"payment",
        billing_address_collection:"required",
        phone_number_collection:{
            enabled:true
        },
        success_url:"http://localhost:3000/reservations",
        metadata:{
            orderId:order.id
        }
    });
    return NextResponse.json({url:session.url},{
        headers:corsHeaders
    })
}