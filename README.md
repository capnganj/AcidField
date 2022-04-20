# Psilocybe
Psilocybe ERC-721 smart contract and minting dapp. Super minimal @capnganj mods to the @hashlips lab v2 ERC-721 NFT contract and minting dapp.

## instructions
This is based on the hashlips masterclass NFT collection youtube video, and the hashlips-labs nft collection v2 repo.  The Smart contract will be deployed using remix, and is copied in here to make the dapp work.

### local dev
- install truffle globally
- run yarn inside of /smart-contract; then yarn run compile to compile the smart contract
- run yarn inside of /minting-dapp; then yarn dev-server to develop locally
- smoke weeds and make the dapp look good and say the right things

### build and deploy
- switch setPublicPath setting in the webpack.config.js file
- yarn run build to build a production version inside of /minting-dapp/public
- copy everything from /minting-dapp/public to /docs (this is where gh-pages point to in the repo settings)
- manually add the /Psilocybe prefix to all img and asset links in the /docs files.  index.html and main.js
- push to main branch on github


## Technical roadmap
- [x] Psilocybe Beta Rinkeby deployment.  Hidden metadata on IPFS.  Attach and customize minting dapp.  Test minting > Opensea import.  
- [ ] Sniper API deployment and Rinkeby reveal testing

- [ ] Psilocybe final 3d model and metadata generation - 4.4k NFTs
- [x] Psilocybe production deployment, first mints, and Marketplace project imports
- [ ] Unpause
- [ ] Reveal

