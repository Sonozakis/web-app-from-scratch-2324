# Web App From Scratch @cmda-minor-web 2023 - 2024
## Idee
Mijn uiteindelijke idee was een mix tussen cybercore en mijn eigen style. Zo ben ik gekomen op het Windows-achtige concept. Ik heb veel blauw gebruikt, omdat ik deze kleur associeer met technologie. Daarnaast heb ik wat filters gegooid op alle afbeeldingen zodat deze een pixelachtig effect zouden krijgen en zo ook goed bij elkaar zouden passen. Door de vakjes met de content ook een beetje willekeurig te positioneren op het scherm, wilde ik het Windows idee verder naar voren laten komen. Hierbij heb ik ook geprobeerd om bijpassende animaties te maken.

## Breakdownschets
Om mijn design goed te kunnen uitvoeren en om het een beetje overzichtelijk te houden voor mezelf heb ik een breakdownschets gemaakt.
<img src="./readme-images/breakdownschets.png" alt="Mijn breakdown schets">

## Proces
### Dag 1 - 6 februari 2024
Tijdens dag 1 heb ik vooral gekeken wat ik wilde qua concept. Ook snapte ik toen nog niet helemaal hoe ik een JSON file moest aanmaken en hoe ik deze moest koppelen aan mijn website. Tijdens de les hebben de docenten uitgelegd hoe we dat moesten doen. Hieronder zijn de screenshots te zien van mijn eerste JSON file en mijn API fetch code die ik heb gebruikt.

<img src="./readme-images/JSON-voorbeeld.png" alt="Mijn eerste JSON file.">
<img src="./readme-images/JSON-java.png" alt="Mijn API fetch in de Javascript.">

### Dag 2 - 7 februari 2024
Dag 2 heb ik vooral verder besteed aan het ontwerpen van mijn concept. Mijn eerste concepten hadden niet echt een microinteractie erin zitten, waardoor ik een beetje moeite had met kiezen wat ik wilde doen. Hierdoor heb ik een hoop schetsen gemaakt. Toen ik eindelijk had gekozen wat ik ongeveer wilde ben ik begonnen aan de mobiele basis layout van mijn CSS. 
<img src="./readme-images/schets1.jpg" alt="Schets 1.">
<img src="./readme-images/schets2.jpg" alt="Schets 2.">
<img src="./readme-images/schets3.jpg" alt="Schets 3.">
<img src="./readme-images/schets4.png" alt="Schets 4.">
<img src="./readme-images/design1.png" alt="Mijn eerste design.">
<img src="./readme-images/design2.png" alt="Mijn tweede design.">


### Dag 3 - 8 februari 2024
Na een nachtje slapen vond ik mijn layout toch niks en ben ik weer opnieuw begonnen (ja ik word ook gek van mezelf). Deze keer was het wel snel raak en ben ik meteen begonnen aan de CSS. Ik heb mijn mobiele layout nu grotendeels af. Ook heb ik de eerste kleine functionaliteit erin verwerkt, namelijk het openen en sluiten van de een informatie vakje. 
<img src="./readme-images/design3.png" alt="Mijn uiteindelijke design.">
<img src="./readme-images/design3vak.png" alt="Screenshot met het vakje open.">
<img src="./readme-images/javawerkend.png" alt="Gedeelte van mijn JavaScript code.">

Deze dag heb ik ook mijn aantekeningen netjes gemaakt van de afgelopen dagen, deze zijn te vinden op mijn [Notion](https://obvious-seal-dd9.notion.site/Minor-Web-Development-6e526033f6244a08af249c72653b22b8?pvs=4).

### Dag 4 - 9 februari 2024
Vandaag heb ik vooral kleine dingetjes goed werkend gemaakt die ik in eerste instantie slordig heb gecodeerd. Denk hierbij aan:
- Vakje met x in de hoek mee laten bewegen bij groter en kleiner worden van scherm
- Als gebruikers hoveren over het x vakje de muis een pointer maken. Dit ging eerst mis door pointer-events:none;. Ik heb bij de .show class nu ook pointer-events:all; toegevoegd wat dit heeft opgelost.
- De main articles goed positioneren over de header heen zonder position: absolute; te gebruiken
<img src="./readme-images/probleempje1.png" alt="Vakjes die niet goed gepositioneerd zijn.">

- En als laatste mijn JavaScript goed werekend gekregen. Lange tijd snapte ik niet helemaal waarom mijn JS het niet goed deed. Ik had alles goed in de file gezet, toch? Ik las alles 5 keer na en probeerde het nog op allerlei andere manieren, maar ik zag mijn fout compleet niet in. Eindstand na 2 uur staren naar het scherm keek ik naar mijn HTML en realiseerde ik me dat ik per ongeluk bij het kopieren van de <articles> ook de <main> had overgenomen en hierdoor dus de favorites en sources niet geselecteerd konden worden met document.querySelector. Na deze realisatie ben ik 5 jaar van mijn levensduur kwijtgeraakt, denk ik. Na dit te aanpassen deed mijn JavaScript het gewoon goed. Joepie. 
<img src="./readme-images/theculprit.png" alt="Mijn leed.">

### Dag 5 - 12 februari 2024
Helaas heb ik in het weekend vrij weinig kunnen doen door werk, dus dit was het eerst volgende moment waarop ik aan het project kon zitten. Vandaag heb ik mijn homescherm volledig responsief gemaakt. 
<img src="./readme-images/smallscreen.png" alt="De kleine scherm versie.">
<img src="./readme-images/bigscreen.png" alt="De grote scherm versie.">

Vervolgens merkte ik ook dat ik de "x"-button beter ook een echte button kon maken, dan een ::after element. Dit heb ik gedaan, wat betekende dat ik ook mijn JavaScript moest aanpassen.
<img src="./readme-images/htmlbutton.png" alt="De button in de HTML.">
<img src="./readme-images/javascriptbutton.png" alt="De nieuwe JavaScript voor de button.">

Ik heb gekeken naar een noise filter die ik over de gehele website kon plaatsen voor een meer "retro" look, maar uiteindelijk vond ik dit toch minder leuk dan ik dacht en heb ik het weggehaald. 
<img src="./readme-images/filtercode.png" alt="Mijn code voor de noise filter.">
<img src="./readme-images/filtereffect.png" alt="Screenshot van hoe de filter eruit ziet.">

Vervolgens heb ik een kleine about me geschreven en een foto van mij erin gezet. Deze heb ik in Photoshop aangepast, zodat het beter bij de estetiek van mijn app zou passen. 
<img src="./readme-images/aboutmetext.png" alt="De about me gedeelte van de pagina.">

Als laatste heb ik ook mijn JSON geupdated met de informatie die de docenten nodig hadden voor hun website. 
<img src="./readme-images/JSON-update1.png" alt="Toegevoegde informatie binnen de JSON.">

### Dag 6 - 13 februari 2024
Ik voelde mij niet zo lekker vandaag, dus heb ik op school best weinig gedaan. Als eerste heb ik de scrollbar aangepast, omdat de standaard scrollbar er niet mooi uitzag binnen mijn layout. 
<img src="./readme-images/scrollbar.png" alt="De nieuwe scrollbar">

Het volgende wat ik heb gedaan is wat informatie plaatsen binnen de sources pagina, zodat ik een basis heb. Hier komen later nog meer sources bij.

Ook heb ik mijn responsiveness bij de sub gedeeltes van mijn app bijgewerkt, zodat deze mooi ogen op kleine, middel en grote schermen. Daarnaast heb ik de vakjes meer verspreid, zodat ze een beetje een pop-up gevoel hebben van een Windows window.

Na een dutje te nemen thuis ben ik hard aan de slag gegaan met mijn website afmaken. Als eerste heb ik vooral gevochten met mijn gekozen API. In principe is het fetchen goed gegaan, maar ik liep snel tegen andere problemen aan. Als eerste kreeg ik een error, omdat ik geen key had. Ik heb hiervoor een account aangemaakt, maar ik heb eerlijk gezegd nooit met een API gewerkt die een key nodig had. Toen ik deze eindelijk had ontvangen, kreeg ik een error dat ik niet genoeg authority had om de data op te roepen. 

<img src="./readme-images/apiflop.png" alt="L">

Omdat ik hier een beetje gek van werd en ik niet goed wist hoe ik dit in godsnaam moest oplossen, heb ik besloten om dit te laten gaan en gewoon een eigen JSON file op te roepen met afbeeldingen en titels van al mijn favorieten. Dit is uiteindelijk heel soepel gegaan door middel van de uitleg die wij vorige week kregen van Marten over JSON en deze files fetchen. 

<img src="./readme-images/JSON-api.png" alt="Mijn JSON bestand.">

Hierna heb ik alle favorieten in 3 verschillende carousels gestopt. Ook heb ik nog even de responsiveness van de vakjes netjes gemaakt.

<img src="./readme-images/carrousel.png" alt="De carousels.">

Als laatste heb ik animaties gemaakt voor het open- en dichtmaken van de subpagina's. Ook heb ik een kleine animatie toegevoegd aan het menu en daar een geluidje aan toegevoegd.

### Dag 7 - 14 februari 2024
De laatste dag heb ik nog wat code stukjes aangepast waar ik niet tevreden mee was, mijn CSS een beetje opgeruimd en nog wat extra comments toegevoegd aan mijn JavaScript zodat ik het beter zou snappen. Ook heb ik alle gebruikte afbeeldingen op de pagina geedit zodat ze meer zouden passen bij het thema van de website.

Ook probeerde ik nog mijn JavaScript te optimaliseren, maar toen ik dat deed viel alles uit elkaar. Hierdoor besloot ik het maar om het te laten en de opdracht zo in te leveren.

<img src="./readme-images/javascriptfoutje.png" alt="Resultaten van mijn klooien met Javascript.">

# Bronnen
## Code
- Font stack: https://modernfontstacks.com/
- Fetch basis: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- Carousel: https://www.educative.io/answers/how-to-implement-a-carousel-slider-using-javascript, https://dev.to/jvon1904/how-to-wrap-around-a-range-of-numbers-with-the-modulo-cdo

## Informatie
- De gebruikte informatie bij de "favorites" is geschreven door ChatGPT.

## Geluid
- https://www.youtube.com/watch?v=kBNOZdXwzdg

## Afbeeldingen
- https://mangaterial.tumblr.com/post/617046609171267584/rei-ayanamimanga-icons-pls-like-if-you-save
- https://m.media-amazon.com/images/M/MV5BODZkZjUxNmEtMGEyOS00ZDY5LTkxZDMtZTJkZDBiZTkyOWRkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg
- https://static.wikia.nocookie.net/umineko/images/f/f6/Higurashi_2006_Anime_Cover.jpg/revision/latest?cb=20200709041329
- https://m.media-amazon.com/images/M/MV5BNjdhYzY0M2QtODgwZi00NDg2LTliNDQtMzA4ZTMzMzQ0MGEyXkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_.jpg
- https://m.media-amazon.com/images/M/MV5BMzRjNDRlYjItYmRmMy00ZmExLWFlYzgtN2QyYjlmYmQ3MjI3XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg
- https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe
- https://e.snmc.io/lk/l/x/8efa2ae3eb2542c053ace125ce939c3c/10667276
- https://www.rpgfan.com/wp-content/uploads/2020/10/Shin-Megami-Tensei-Persona-3-Artwork-023-scaled.jpg
- https://upload.wikimedia.org/wikipedia/en/8/89/Dragon_Age_Origins_cover.png
- https://m.media-amazon.com/images/I/61hp8zM2D4L._AC_UF894,1000_QL80_.jpg
- https://assets.vg247.com/current//2018/05/red_dead_redemption_2_cover_art_1.jpg
- https://www.interviewmagazine.com/wp-content/uploads/2023/02/7_NEW.jpg
- https://ca-times.brightspotcdn.com/dims4/default/0c0e780/2147483647/strip/false/crop/2662x4000+0+0/resize/989x1486!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F06%2F10%2Ff4afc21d481f977446b76eac8839%2Fby-luis-panch-perez.jpg
- https://i.pinimg.com/564x/c4/1f/35/c41f356a55be8a252ce51511a8f6c2cc.jpg
- https://img.parool.nl/944168d23b88e156462d93a28d8f40d4fe8f9256/het-album-van-rb-zangeres-kali-uchis-staat-in-het-teken-van-seks-maar-dan-wel-de-luxe-variant-daarvan
- https://lastfm.freetls.fastly.net/i/u/ar0/38a7155c834f80a49df821a741a68b17.jpg
