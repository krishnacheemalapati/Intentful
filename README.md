# Intentful
This is the Techy Blinders' Voiceflow Project! 

Intentful was made to help retail companies turn transcripts into conversational assistants. Intentful is potentially an add-on feature for Voiceflow that helps Voiceflow users set up their environment on the Voiceflow platform faster and smarter.

Intentful allows you, a retail company, to find out what matters the most to your customers. After uploading your transcripts of conversations between the customers and your chat app, Intentful detects the "intent" (e.g. 'buy_pizza') of each human message in a single transcript. It keeps track of how many times each intent has occurred in the conversation(s), so that while setting up your Voiceflow environment, you can prioritize those intents to maximize customer utility.

Intentful also identifies "intent associates": the most frequent intents that come after a specific intent. By letting you know the most common conversation sequences, we help you choose better options for building conversation logic/flow with greater depth. For example, if 'buy_fries' is the most frequent intent after the 'buy_cheeseburger' intent, you can build a chatbot that asks the users whether they would like fries after they mention they want a cheeseburger. 

Consequently, Intentful is perfect to both get you started on Voiceflow and maximize your experience with Voiceflow.

## Contributors

Our development team (The Techy Blinders) consisted of:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table width="100%">
  <tbody width="100%">
    <tr width="100%">
      <td align="center" valign="top" width="19.275%"><a href="https://krishnacheemalapati.github.io/"><img src="https://avatars.githubusercontent.com/u/45082599?v=4" width="100px;" alt="Krishna Cheemalapati"/><br /><sub><b>Krishna Cheemalapati <br /> (Front-End Development)</b></sub></a><br /></td>
      <td align="center" valign="top" width="15.5%"><a href="https://github.com/chenikabukes"><img src="https://avatars.githubusercontent.com/u/97484565?v=4" width="100px;" alt="Chhavi Shah"/><br /><sub><b>Chenika Bukes <br /> (Data Visualization)</b></sub></a><br /></td>
      <td align="center" valign="top" width="18.8%"><a href="https://github.com/Dhairya-Khara"><img src="https://avatars.githubusercontent.com/u/72181663?v=4" width="100px;" alt="Joudat Haroon"/><br /><sub><b>Dhairya Khara <br /> (Back-End Development)</b></sub></a><br /></td>
      <td align="center" valign="top" width="18.8%"><a href="https://github.com/BerkeAltiparmak"><img src="https://avatars.githubusercontent.com/u/117605849?v=4" width="100px;" alt="Devin Forrest"/><br /><sub><b>Berke Altiparmak <br /> (Back-End Development)</b></sub></a><br /></td>
      <td align="center" valign="top" width="18.8%"><a href="https://github.com/aidanmrli"><img src="https://avatars.githubusercontent.com/u/117605849?v=4" width="100px;" alt="Devin Forrest"/><br /><sub><b>Aidan Li <br /> (Back-End Development)</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Features
### Landing Page 
- Register, Log-in functionality
<p align="center">
  <img src="https://github.com/krishnacheemalapati/Intentful/assets/45082599/3e5eca76-d4cf-4a7f-ac1a-5c63467bce93" alt="Intentful Homepage"/>
  <p align="center">Figure 1a: Application home page</p>
</p>

- Team Bios

<p align="center">
  <img src="https://github.com/krishnacheemalapati/Intentful/assets/45082599/58abaa41-0723-4a23-94d4-28096beb805b" alt="Intentful Team Bios"/>
  <p align="center">Figure 1b: About page</p>
</p>

### Dashboard
- Upload single or multiple transcripts in a dialogue.json file
- View previously uploaded transcripts
- Ability to visualize all intents of an individual transcript, or all intents of all previously uploaded transcripts
- See an intent's associates and their frequency by clicking on the intent's bubble
- Create an intent block with that labelled intent on the Voiceflow site using the Modal (by entering Voiceflow info)
<p align="center">
  <img src="https://github.com/krishnacheemalapati/Intentful/assets/45082599/76c7623b-b48c-4964-ab30-f65fb0a53861" alt="Intentful Dashboard"/>
  <p align="center">Figure 2: Example dashboard layout</p>
</p>

## Getting Started
- Install MongoDB and NodeJS
- Clone the repo
- Start MongoDB on port 27017 (the default MongoDB port)
- To start the client run `cd client`, `npm install`, `npm run start` from the root of the project.
- To start the server run `cd server`, `npm install`, `npm run start` from the root of the project. Note, if you have `nodemon` installed, you can also run `npm run dev` instead of `npm run start` for a better development experience.

If everything is done correctly, you can visit `http://localhost:3000/` in your favourite browser to start using the application.
