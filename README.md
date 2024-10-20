# DaoVerse
DAOVERSE RnDAO hackathon submission

![Daoverse](./utils/daoverse.png)

## A complete governance system for renting and selling room tokens
Welcome to Daoverse, a comprehensive governance system designed for renting and selling room tokens. The Daoverse Token is ERC4907 compatible, allowing owners to rent out their room NFTs without transferring ownership. This unique capability enables various complex scenarios, empowering roomowners to securely lease their property to contractors for predetermined durations and fees.
Rooms can be equipped with all sorts of collaborative tools, the one we developed for the RndHackathon is a RAG (LLM interacting with a database of organizational psychology resources), the RAG is called Eva and requires land owners to submit an on-chan message (only gas fees) in order to give an answer, this allows both the land owner/project founder to get resources in a psychologivally safe environment (which the blockchain is not in particular for people who get money for good ideas) from a refined version of one of the most powerful AI on the market today and in return the DAO members can retrieve the messages for a give address onchain and see the situation with clarity.
Humble.ai has reached out to me to try their new voice emphatic model recently and I would gladly submit this project to them if the hackathon goes well.

## Key Features
### Room Token (ERC4907 Compatible)
The Room Token adheres to the ERC4907 standard, facilitating the seamless rental of room NFTs to users who do not own the NFT. This innovative feature empowers roomowners to lease their room without relinquishing ownership, ensuring a secure and binding agreement between parties.

### DaoVerseGovernor Governance Contract
DaoVerseGovernor is a complete DAO governance system catering to both roomowners and renters. The governance system supports proposals from both parties and allows for the selection of voting rights between owners and renters. Timelocks on proposals enable users who disagree with passed proposals to take action before execution.

### RentLand Market
Discover a comprehensive marketplace where roomowners can publicly list their lands for rent. To ensure fairness, a room can only be listed for rent if it is not currently for sale, and there are no active rental agreements in place.

### RoomMarketplace
Explore a dedicated marketplace for landowners to publicly sell their land tokens. To maintain market integrity, a land can only be listed for sale if it is not currently rented or available for rent.

## Getting Started
To start utilizing the RoomLand Token Governance System, follow these steps:
1. **Deploy RoomLand Token**: Deploy the FarmLand Token contract to start leveraging ERC4907-compatible room NFTs.
2. **Deploy RoomLandGovernor**: Engage the complete DAO governance system by activating DaoVerseGovernor, allowing for proposals from both roomowners and renters.
3. **Deploy and Explore RentRoom Market**: List your rooms for rent on the RentRoom Market, ensuring they are not currently for sale and have no active rental agreements.
4. **Deploy and explore RoomMarketplace**: Publicly sell your room tokens on the RoomMarketplace, ensuring they are not currently rented or listed for rent.

Feel free to contribute, provide feedback, or report issues.
