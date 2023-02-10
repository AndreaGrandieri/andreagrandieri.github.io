/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//                                                             //
//                                                             //
// Andrea Grandieri andreagrandieri.github.io                  //
// Copiloted by Copilot@GitHub                                 //
//                                                             //
//                                                             //
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// This is a module. The globalThis export is used. The globalThis export can also be used with variables.

import * as CDNQuerierEngine from "./CDNQuerierEngine.js";
import * as globalShared from "./globalShared.js";
import * as vars_universalBroadcast from "./vars_universalBroadcast.js";

// News are in the following format:
/*
{
    "news": [
        {
            "validityURL": "",
            "birthday": "",
            "TTL": "",
            "callout_level": "",
            "title": "",
            "content": ""
        }
    ]
}
*/

// News schema is in the following format:
/*
{
    "callout_levels": [
        {
            "callout_level": "",
            "content": ""
        }
    ]
}
*/

var news = null;
var newsSchema = null;

// Query the CDN for news to be broadcasted
async function getNewsFromCDN() {
    // Check if "news" is not null or undefined: if so, the news have already been fetched and there is no need to fetch them again
    if (news == null || news == undefined) {
        try {
            // "queryCDN" uses "JSON.parse" already
            await CDNQuerierEngine.queryCDN(vars_universalBroadcast.news, function (data) {
                news = data;
            });
        } catch (e) {
            // Error. Handling:
            globalShared.toggle_engine_fetching_inErrorState();
            return;
        }
    }
}
globalThis.getNewsFromCDN = getNewsFromCDN;

async function getNewsSchemaFromCDN() {
    // Check if "newsSchema" is not null or undefined: if so, the news schema have already been fetched and there is no need to fetch them again
    if (newsSchema == null || newsSchema == undefined) {
        try {
            // "queryCDN" uses "JSON.parse" already
            await CDNQuerierEngine.queryCDN(vars_universalBroadcast.newsSchema, function (data) {
                newsSchema = data;
            });
        } catch (e) {
            // Error. Handling:
            globalShared.toggle_engine_fetching_inErrorState();
            return;
        }
    }
}
globalThis.getNewsSchemaFromCDN = getNewsSchemaFromCDN;

// Broadcast the news
async function broadcastNews() {
    // First of all, get the news and the schema
    try {
        await getNewsSchemaFromCDN();
        await getNewsFromCDN();

        // Now, "news" contains all the news to be broadcasted.
        // Traverse all the news following the format above
        for (var i = 0; i < news.news.length; i++) {
            // Check the "validityURL" of the news: the news should only be displayed if "validityURL" matches the current URL of the page

            // Check if the "validityURL" is the current URL of the page, regardless of the presence of ".html" at the end of the URL of the current page
            if (news.news[i].validityURL == window.location.href.replace(".html", "")) {
                // Parse the date in "birthday". Example format: "1.Jan.2021"
                var date = new Date(news.news[i].birthday);

                // Add to "date" the "TTL"; the "TTL" is in # of hours
                date.setHours(date.getHours() + news.news[i].TTL);

                // Get the current date
                var currentDate = new Date();

                // Check if "date" falls after "currentDate": if so, the news SHOULD NOT be displayed
                if (currentDate <= date) {
                    // News to be displayed
                    var toInject = "";

                    // From "newsSchema", get the "content" based on "callout_level" from "news"
                    for (var j = 0; j < newsSchema.callout_levels.length; j++) {
                        if (newsSchema.callout_levels[j].callout_level == news.news[i].callout_level) {
                            toInject += newsSchema.callout_levels[j].content;
                            break;
                        }
                    }

                    // A title is present if "title" is not null or undefined
                    if (news.news[i].title != null && news.news[i].title != undefined) {
                        // Append the title to "toInject", the close the "p" tag
                        toInject += news.news[i].title + "</p>";
                    }

                    // Open the "p" tag and append the content to "toInject"
                    toInject += "<p>" + news.news[i].content;

                    // Close "blockquote"
                    toInject += "</blockquote>";

                    // "toInject" is now ready to be injected into the DOM. Inject in the div with id "broadcastTarget_universalBroadcast"
                    document.getElementById("broadcastTarget_universalBroadcast").innerHTML = toInject;
                }

                continue;
            }

            // Check the "validityURL" of the news: check if the URL is the base URL of the website.
            // Check if the "validityURL" is a substring of the current URL of the page
            if (news.news[i].validityURL.includes(window.location.origin)) {
                console.log("ORIGIIIIIIN");           
            }
        }
    } catch (e) {
        // Error. Handling:
        globalShared.toggle_engine_fetching_inErrorState();
        return;
    }
}
globalThis.broadcastNews = broadcastNews;