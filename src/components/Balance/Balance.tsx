import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

const Balance = () => {
    const { connection } = useConnection();
    const wallet = useWallet();
    const [balance, setBalance] = useState<number>(0);

    

    useEffect(() => {
        async function getBalance() {
            if (wallet.publicKey) {
                const bal = await connection.getBalance(wallet.publicKey);
                setBalance(bal / LAMPORTS_PER_SOL);
            }
        }
        getBalance();
    }, [wallet.publicKey, connection])

    return (
        <div>Balance: {balance} SOL</div>
    )
}

export default Balance