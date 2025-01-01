import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const Airdrop = () => {
    const wallet = useWallet();
    const [solRequest, setSolRequest] = useState<number>(0);
    const { connection } = useConnection();
    async function handleAirdrop() {
        await connection.requestAirdrop(wallet.publicKey as PublicKey, solRequest * LAMPORTS_PER_SOL);
        alert(`${solRequest} SOL dropped to ${wallet.publicKey?.toBase58()}`)
    }
    return (
        <div className="flex flex-col md:flex-row gap-2 md:w-1/2 w-3/4 mx-auto justify-evenly items-center my-2">
            <Input
                type="number"
                placeholder="Enter SOL"
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => setSolRequest(+event.target.value)}
            />
            <Button onClick={handleAirdrop} size="default" variant="outline">Request Airdrop</Button>
        </div>
    )
}

export default Airdrop