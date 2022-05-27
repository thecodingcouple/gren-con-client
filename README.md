# gren-con-client

Source code for https://www.gren-con.com (Work in progress)

[Click here](https://github.com/thecodingcouple/gren-con-api) to view source code for the API.

## Synopsis

We are building a website for hosting information about Gren Con, one day filled with gaming! 

Why go through all this effort you may ask? For learning! This is an excuse to learn new skills and become more proficient with existing skills. 

## Built With

* [Vue 3](https://vuejs.org/)
* [BoardGameGeek API v2](https://boardgamegeek.com/wiki/page/BGG_XML_API2) (For Game Library page)

## Third Party Assets

* [Dice Image](https://unsplash.com/photos/hFSnuPi0t3Q) by Joe Maldonado

## Connecting to the BoardGameGeek XML API

[BoardGameGeek](https://boardgamegeek.com/) has a [public XML API](https://boardgamegeek.com/wiki/page/BGG_XML_API2) for retrieving data from their site, including user game collections.  Here is a request to retrieve [townsean's game collection](https://boardgamegeek.com/collection/user/townsean?own=1&subtype=boardgame&ff=1):

`https://boardgamegeek.com/xmlapi2/collection?username=townsean&own=1`

Initial requests return with the following message:

```xml
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<message>
	Your request for this collection has been accepted and will be processed.  Please try again later for access.
</message>
```

Subsequent requests will return the user's game collection:

```xml
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<items totalitems="312" termsofuse="https://boardgamegeek.com/xmlapi/termsofuse" pubdate="Fri, 06 May 2022 01:36:22 +0000">
    <item objecttype="thing" objectid="35610" subtype="boardgame" collid="24888762">
        <name sortindex="1">3·4 = Klatsch!</name>
        <yearpublished>2008</yearpublished>
        <image>https://cf.geekdo-images.com/h_hWzVKVM9qY8Dk422lVZw__original/img/udorUI1yjmfrHnxNeo_gNrPCTCA=/0x0/filters:format(jpeg)/pic322180.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/h_hWzVKVM9qY8Dk422lVZw__thumb/img/0kono0ts2ttycTtzVi5zQnneYHM=/fit-in/200x150/filters:strip_icc()/pic322180.jpg</thumbnail>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2014-10-14 11:16:54" />
        <numplays>3</numplays>
        <comment>Where was this game when I was memorizing the times table?  The component quality is great.  I&#039;ve only played this game with adults and each game was an enjoyable experience. :)</comment>
    </item>
  
    <!-- Removed for brevity -->
  
    <item objecttype="thing" objectid="139162" subtype="boardgame" collid="71332027">
        <name sortindex="1">Zingo! Sight Words</name>
        <yearpublished>2012</yearpublished>
        <image>https://cf.geekdo-images.com/XU7mIj2i1jIlDQ5_SJ0KlQ__original/img/h-H8XJ9wyCoCaVhXNQ_SgOv68FY=/0x0/filters:format(jpeg)/pic2047488.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/XU7mIj2i1jIlDQ5_SJ0KlQ__thumb/img/ndAULDYZaaL51GfAL-VPFBMXhsE=/fit-in/200x150/filters:strip_icc()/pic2047488.jpg</thumbnail>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2020-05-19 22:39:44" />
        <numplays>1</numplays>
    </item>
    <item objecttype="thing" objectid="153566" subtype="boardgame" collid="71332032">
        <name sortindex="1">Zingo! Time-telling</name>
        <yearpublished>2014</yearpublished>
        <image>https://cf.geekdo-images.com/nx67vi4AvBcEVLCBGqjkCA__original/img/tG3LLDTMHQnhRLlJtwcHzeXx878=/0x0/filters:format(jpeg)/pic2047489.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/nx67vi4AvBcEVLCBGqjkCA__thumb/img/lBDu3PIGZoxady2L-YvF4y9NmVI=/fit-in/200x150/filters:strip_icc()/pic2047489.jpg</thumbnail>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2020-05-19 22:39:59" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="187515" subtype="boardgame" collid="44653752">
        <name sortindex="1">Zooscape</name>
        <yearpublished>2015</yearpublished>
        <image>https://cf.geekdo-images.com/3vDjlyTy-gaoz-cTLT9h1Q__original/img/MvvupVNRiV2VZn0PRxYiGrA1R8c=/0x0/filters:format(png)/pic3415495.png</image>
        <thumbnail>https://cf.geekdo-images.com/3vDjlyTy-gaoz-cTLT9h1Q__thumb/img/iE4U9QvqtNMnrLpDJ_Yx8hg-YTA=/fit-in/200x150/filters:strip_icc()/pic3415495.png</thumbnail>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2017-08-18 15:15:44" />
        <numplays>0</numplays>
    </item>
</items>
```

Here's an example to request additional details on a specific game: `https://boardgamegeek.com/xmlapi2/thing?id=35610`

Which will provide the following XML data:

```xml
<?xml version="1.0" encoding="utf-8"?>
<items termsofuse="https://boardgamegeek.com/xmlapi/termsofuse">
    <item type="boardgame" id="35610">
        <thumbnail>https://cf.geekdo-images.com/h_hWzVKVM9qY8Dk422lVZw__thumb/img/0kono0ts2ttycTtzVi5zQnneYHM=/fit-in/200x150/filters:strip_icc()/pic322180.jpg</thumbnail>
        <image>https://cf.geekdo-images.com/h_hWzVKVM9qY8Dk422lVZw__original/img/udorUI1yjmfrHnxNeo_gNrPCTCA=/0x0/filters:format(jpeg)/pic322180.jpg</image>
        <name type="primary" sortindex="1" value="3·4 = Klatsch!" />
        <name type="alternate" sortindex="1" value="3 Times 4=Swat!" />
        <name type="alternate" sortindex="1" value="3Â·4=Â£Zas!" />
        <name type="alternate" sortindex="1" value="3Â·4=Pets!" />
        <name type="alternate" sortindex="1" value="3·4 = Klatsch" />
        <name type="alternate" sortindex="1" value="3·4=Acchiappa!" />
        <name type="alternate" sortindex="1" value="3·4=Pets!" />
        <name type="alternate" sortindex="1" value="3·4=£Zas!" />
        <name type="alternate" sortindex="1" value="Multimouches" />
        <description>A player chooses a numbered flower on his/her turn. (&amp;quot;Let's multiply by fives.&amp;quot;) When everyone is ready, roll a die, and quickly multiply the numbers on each. Be the first to swat the fly card with the correct product to earn a wooden fly token. Collect eight tokens to win.&amp;#10;&amp;#10;Contents: 45 wooden flies, 42 fly cards, 6 fly swatters, 5 flowers, 5 flower cards, and 2 dice&amp;#10;&amp;#10;</description>
        <yearpublished value="2008" />
        <minplayers value="2" />
        <maxplayers value="6" />
        <poll name="suggested_numplayers" title="User Suggested Number of Players" totalvotes="0">
            <results numplayers="1">
                <result value="Best" numvotes="0" />
                <result value="Recommended" numvotes="0" />
                <result value="Not Recommended" numvotes="0" />
            </results>
            <results numplayers="2">
                <result value="Best" numvotes="0" />
                <result value="Recommended" numvotes="0" />
                <result value="Not Recommended" numvotes="0" />
            </results>
            <results numplayers="3">
                <result value="Best" numvotes="0" />
                <result value="Recommended" numvotes="0" />
                <result value="Not Recommended" numvotes="0" />
            </results>
            <results numplayers="4">
                <result value="Best" numvotes="0" />
                <result value="Recommended" numvotes="0" />
                <result value="Not Recommended" numvotes="0" />
            </results>
            <results numplayers="5">
                <result value="Best" numvotes="0" />
                <result value="Recommended" numvotes="0" />
                <result value="Not Recommended" numvotes="0" />
            </results>
            <results numplayers="6">
                <result value="Best" numvotes="0" />
                <result value="Recommended" numvotes="0" />
                <result value="Not Recommended" numvotes="0" />
            </results>
            <results numplayers="6+">
                <result value="Best" numvotes="0" />
                <result value="Recommended" numvotes="0" />
                <result value="Not Recommended" numvotes="0" />
            </results>
        </poll>
        <playingtime value="10" />
        <minplaytime value="10" />
        <maxplaytime value="10" />
        <minage value="8" />
        <poll name="suggested_playerage" title="User Suggested Player Age" totalvotes="0">
            <results>
                <result value="2" numvotes="0" />
                <result value="3" numvotes="0" />
                <result value="4" numvotes="0" />
                <result value="5" numvotes="0" />
                <result value="6" numvotes="0" />
                <result value="8" numvotes="0" />
                <result value="10" numvotes="0" />
                <result value="12" numvotes="0" />
                <result value="14" numvotes="0" />
                <result value="16" numvotes="0" />
                <result value="18" numvotes="0" />
                <result value="21 and up" numvotes="0" />
            </results>
        </poll>
        <poll name="language_dependence" title="Language Dependence" totalvotes="0">
            <results>
                <result level="181" value="No necessary in-game text" numvotes="0" />
                <result level="182" value="Some necessary text - easily memorized or small crib sheet" numvotes="0" />
                <result level="183" value="Moderate in-game text - needs crib sheet or paste ups" numvotes="0" />
                <result level="184" value="Extensive use of text - massive conversion needed to be playable" numvotes="0" />
                <result level="185" value="Unplayable in another language" numvotes="0" />
            </results>
        </poll>
        <link type="boardgamecategory" id="1032" value="Action / Dexterity" />
        <link type="boardgamecategory" id="1041" value="Children's Game" />
        <link type="boardgamecategory" id="1094" value="Educational" />
        <link type="boardgamecategory" id="1104" value="Math" />
        <link type="boardgamemechanic" id="2072" value="Dice Rolling" />
        <link type="boardgamefamily" id="22783" value="Admin: Better Description Needed!" />
        <link type="boardgamefamily" id="7589" value="Animals: Flies" />
        <link type="boardgamefamily" id="19716" value="Series: Lernspiel (HABA)" />
        <link type="boardgamedesigner" id="10431" value="Antje Reiter" />
        <link type="boardgameartist" id="12738" value="Martina Leykamm" />
        <link type="boardgamepublisher" id="384" value="HABA" />
    </item>
</items>
```

## Useful Resources

* https://stripesgenerator.com/
* https://color.adobe.com/create/color-wheel

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Deploy to gh-pages

```sh
git add dist && git commit -m "updating gh-pages"
git subtree push --prefix dist origin gh-pages
```

or

```sh
npm run deploy
```

## Maintainers

* [Ashley Grenon - @townsean](https://github.com/townsean)
* [Brodavi - @brodavi](https://github.com/brodavi)
* [Dickie - @DickieTheProgrammer](https://github.com/DickieTheProgrammer)
* [Michael Grenon - @nsipid](https://github.com/nsipid)

## License (MIT)

MIT License

Copyright (c) 2022 The 42nd

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.