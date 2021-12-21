#Reddit App - Concept opdracht

##Inleiding
De Reddit applicatie laat op de homepage de 15 _hottest_ posts van dit moment zien. Wanneer de gebruiker op de titel van een post klikt, wordt hij doorgestuurd naar de echte post op de Reddit website.
In iedere post is te zien onder welke _subreddit_ de post hoort, hoeveel comments de post heeft en hoeveel _upvotes_ hij heeft.

Wanneer de gebruiker klikt op de _subreddit_ naam, wordt hij doorgestuurd naar de _subreddit specificatiepagina_. Op de pagina is informatie over de _subreddit_ te vinden, zoals de titel, een beschrijving, hoeveel _subscribers_ de pagina heeft en een banner afbeelding. Als de _subreddit_ geen banner afbeelding heeft, toont de pagina een standaard afbeelding.

De applicatie maakt gebruik van **react router** om te _switchen_ tussen verschillende pagina's. Daarnaast wordt gebruik gemaakt van **axios** om informatie op te halen via de _reddit API_.

##Applicatie starten
Clone ten eerste het project naar jouw eigen lokale machine. Wanneer je dit hebt gedaan run je het commando `npm init` in de terminal om de `node_modules` te installeren.

Als dit klaar is, run je het commando `npm start` om de applicatie te starten. De browser zal automatisch openen met [http://localhost:3000](http://localhost:3000), waarop de applicatie zal draaien.