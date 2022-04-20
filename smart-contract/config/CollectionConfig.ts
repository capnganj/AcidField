import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Psilocybe',
  tokenName: 'Psilocybe',
  tokenSymbol: 'PS',
  hiddenMetadataUri: 'ipfs://QmWo9jtpH5ZumkdAFq7SoyrGyu3BSmJFxkVgsKRdbxUuVF/hidden.json',
  maxSupply: 4444,
  whitelistSale: {
    price: 0.1,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.1,
    maxMintAmountPerTx: 10,
  },
  contractAddress: '0x069cAF6265678a7bf50c343dbf88642670852436',
  marketplaceIdentifier: 'psilocybe',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
