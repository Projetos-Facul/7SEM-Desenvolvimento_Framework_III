
import { useState } from "react";

export default function useCliente()
{

    const [cliente, setCliente] = useState(null)

    const getCliente = () => cliente

    return { getCliente, setCliente }
    
}