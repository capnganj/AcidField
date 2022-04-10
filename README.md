# Acid Field
Acid Field ERC-721 smart contract and minting dapp. Super minimal @capnganj mods to the @hashlips lab v2 ERC-721 NFT contract and minting dapp.

## instructions
This is based on the hashlips masterclass NFT collection youtube video, and the hashlips-labs nft collection v2 repo.  The Smart contract will be deployed using remix, and is copied in here only to make the dapp work.

### local dev
- install truffle globally
- run yarn inside of /smart-contract; then yarn run compile to compile the smart contract
- run yarn inside of /minting-dapp; then yarn dev-server to develop locally

### build and deploy
- switch setPublicPath setting in the webpack.config.js file
- yarn run build to build a production version inside of /minting-dapp/public
- copy everything from /minting-dapp/public to /docs (this is where gh-pages point to in the repo settings)
- manually add the /PoisonToadsDapp prefix to all img and asset links in the /docs file.  index.html and main.js
- push to main branch on github


## Technical roadmap
- [x] Acid Field *Alpha* drawing algorithm development - [*Acid Tests* ](https://objkt.com/collection/KT1QJy7xLUmXqG6ZvrkXwAe27dXHPk7hA6eJ) on Tezos <3
- [x] Acid Field *Graduation* runs.  Final drawing logic tweaks, metadata development, iterative testing data for testnet deployment.
- [ ] Acid Field Beta Rinkeby deployment.  Drawings and metadata on IPFS.  Attach and customize minting dapp.  Test minting > Opensea import > reveal.  Test metadata URI update after reveal
- [ ] Sniper API deployment and Rinkeby testing

- [ ] Acid Field final drawing and metadata generation - 999 NFTs
- [ ] Acid Field production deployment, first mints, and Marketplace project imports
- [ ] Unpause
- [ ] Reveal

