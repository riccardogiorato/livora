# All Your Life

## Goal

Insert your birthday, see how many of your life is remaining based on average life.

## Features

1. inserting your age
2. inserting biological sex male or female
3. inserting year and month/day
4. see your progress in weeks/heat map or as a single progress bar
5. save this custom progress just for you with a custom URL
6. see other people shared URL easily
7. make this app work offline
8. extra: "package it as a Chrome Extension?"

https://query.wikidata.org/#SELECT%20%3Fflag%20%3Fcountry%20%3FcountryLabel%20%3FlifeExpectancy%20WHERE%20%7B%0A%20%20%3Fcountry%20wdt%3AP31%20wd%3AQ3624078%3B%0A%20%20%20%20%20%20%20%20%20%20%20wdt%3AP2250%20%3FlifeExpectancy.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22.%20%7D%0A%7D
SELECT ?country ?countryLabel ?lifeExpectancy WHERE {
?country wdt:P31 wd:Q3624078;
wdt:P2250 ?lifeExpectancy.
SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}

https://www.kaggle.com/augustus0498/life-expectancy-who

https://github.com/giusi07/Life-Expectancy/blob/master/LifeExpectancy.csv

## C4 Model

From https://c4model.com/ or "The C4 model for visualising software architecture"

![](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/riccardogiorato/livora/master/docs/context.puml)

![](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/riccardogiorato/livora/master/docs/container.puml)

![](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/riccardogiorato/livora/master/docs/component.puml)
