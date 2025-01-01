
import { useWallet } from '@solana/wallet-adapter-react'
import { Button } from '../ui/button'
import { useState } from 'react';
import { Input } from '../ui/input';
import {ed25519} from "@noble/curves/ed25519"
import bs58 from "bs58"
const SignMessage = () => {
    const [message, setMessage] = useState<string>("");
    const { publicKey, signMessage } = useWallet();
    
    async function handleSendMessage() {
        if (!publicKey) alert("Wallet not connected");
        if (signMessage) {
            const encodeMessage = new TextEncoder().encode(message);
            const signature = await signMessage(encodeMessage);
            if (publicKey) {
                if (!ed25519.verify(signature, encodeMessage, publicKey?.toBytes())) alert("Signature invalid");
                alert(`Success Message signature: ${bs58.encode(signature)}`)
            }
        
        }
    }

    return (
        <div className="flex flex-col md:flex-row gap-2 md:w-1/2 w-3/4 mx-auto justify-evenly items-center my-2">
            <Input
                type="text"
                placeholder="Enter your message"
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
            />
            <Button onClick={handleSendMessage} size="default" variant="outline">Sign Message</Button>
        </div>
    )
}

export default SignMessage