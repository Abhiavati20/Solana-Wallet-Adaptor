
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import Airdrop from './components/Airdrop/Airdrop';
import Balance from './components/Balance/Balance';
import SignMessage from './components/SignMessage/SignMessage';
import SendToken from './components/SendToken/SendToken';

function App() {
  // setting network to devnet
  // const network = WalletAdapterNetwork.Devnet;

  // creating rpc endpoint
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const endpoint = "https://solana-devnet.g.alchemy.com/v2/3uRd7YCrV2tIFc9FRSeD7-BB-XFr1HDN"



  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          {/* <WalletMultiButton />
          <WalletDisconnectButton /> */}
          <div className="flex flex-col gap-2 h-screen w-screen justify-center items-center">
            <WalletMultiButton />
            <WalletDisconnectButton />
            <Airdrop />
            <Balance />
            <SignMessage />
            <SendToken />
          </div>
          
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
