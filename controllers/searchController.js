const keys = require("../keys");
const key = keys.riot.id;
const request = require("request");
const jsonfile = require("../client/public/champion.json");
const itemfile = require("../client/public/item.json");
const items = JSON.parse(JSON.stringify(itemfile.data));
const champions = JSON.parse(JSON.stringify(jsonfile.data));


// Defining methods for the SummonersController
module.exports = {
    findNew: function(req, res) {
        console.log('find new summoner triggered');
        request('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+req.params.name+'?api_key='+key, (err, response, body) =>{
            if(!err && response.statusCode === 200) {
                let sum = {};
                console.log('api summoner call worked');
                sum = JSON.parse(body);
                var utcSeconds = sum.revisionDate;
                var d = new Date(0);
                d.setUTCMilliseconds(utcSeconds);
                sum.revisionDate = d;
                sum.updated = new Date();
                sum.name = sum.name.trim();
                sum.title = '' +sum.name + '\'s rito';
                res.json(sum);
            }
            else {
                sum.errMsg = "Something went wrong retrieving your summoner account information";
                res.render("qwikstats", sum);
                console.log(response.body);
            }
        });
    },
    getRanked: function(req,res) {
        console.log('get ranked triggers');
        request('https://na1.api.riotgames.com/lol/league/v4/positions/by-summoner/'+sum.id+'?api_key='+key,(err,response,body) => {
            if(!err && response.statusCode === 200) {
                var a = JSON.parse(body);
                for (x=0; x<a.length; x++) {
                    a[x].games = (a[x].wins + a[x].losses);
                    a[x].wr = (a[x].wins/a[x].losses).toFixed(2);
                    a[x].queueType === 'RANKED_FLEX_SR' ? sum.flex5 = a[x] : a[x];
                    a[x].queueType === 'RANKED_SOLO_5x5' ? sum.solo = a[x] : a[x];
                    a[x].queueType === 'RANKED_FLEX_TT' ? sum.flex3 = a[x] : a[x];
                }
               res.json(sum);
            }
            else {
                sum.errMsg = "Something went wrong retrieving your ranked information";
                res.render("qwikstats", sum);
                console.log(response.body);
            }
        });
    },
};