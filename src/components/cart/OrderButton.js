import React, { useState } from 'react'
import { writeBatch, doc, updateDoc, addDoc, collection, getFirestore } from "firebase/firestore";


const OrderButton = () => {

    const [lastId, setLastId] = useState()

    const db = getFirestore();

    const buyHandler = async () => {
        const order = {
            buyer: {
                name: 'Ana Perez',
                phone: 635352728,
                email: 'ana@gmail.com'
            },
            items: [
                {id:1, title:'oso', price:20},
                {id:2, title:'jirafa', price:30}
            ],
            total: 50
        };

        const {id} = await addDoc(collection(db, "orders-store"), order);
        setLastId(id)
        console.log('order Id', id);
    }

    const updateHandler = async () => {
        const lastOrder = doc(db, "orders-store", lastId);

        // Set the "capital" field of the city 'DC'
        await updateDoc(lastOrder, {
            total: 30
        });
    }


    const updatePricesHandler = async () => {
        const batch = writeBatch(db);

        const doc1 = doc(db, "orders-store", "5qb7uTfWT4ehOg5gaV2G");
        batch.update(doc1, {total: 70});

        const doc2 = doc(db, "orders-store", "D6IoYsmjjLjJkn5YbdRb");
        batch.update(doc2, {total: 75});

        const doc3 = doc(db, "orders-store", "Df6Mf3DMs6HGCoSNUCiP");
        batch.update(doc3, {total: 65});

        const doc4 = doc(db, "orders-store", "hvENOSOjkHb1lEE5sPgo");
        batch.delete(doc4);

        await batch.commit();
    }
    
    
    

    return (
        <div>
            <button onClick={buyHandler}>Terminar compra</button>
            <br/>
            {lastId &&
                <button onClick={updateHandler}>Agregar descuento a última orden</button>
            }
            <br/>
            <button onClick={updatePricesHandler}>Aumentar precios</button>
        </div>
    )
}

export default OrderButton
