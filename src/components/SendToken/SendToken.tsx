import { useState } from "react";
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

const SendToken = () => {
    const [toAddr, setToAddr] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();

    async function handleSendToken() {
        
        const transaction = new Transaction();
        if (publicKey) {
            transaction.add(SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: new PublicKey(toAddr),
                lamports: amount * LAMPORTS_PER_SOL
            }))
            await sendTransaction(transaction, connection);
            alert("Sent " + amount + " SOL to " + toAddr);
        }
        
    }

    return (
        <div className="flex flex-col md:flex-row gap-2 md:w-1/2 w-3/4 mx-auto justify-evenly items-center my-2">
            <Input
                type="text"
                placeholder="Enter amount"
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => setAmount(+event.target.value)}
            />
            <Input
                type="text"
                placeholder="Enter address you want to send"
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => setToAddr(event.target.value)}
            />
            <Button onClick={handleSendToken} size="default" variant="outline">Send Token</Button>
        </div>
    )
}

export default SendToken