

export class ZorgAPIenMailMethods {
    async roepApiAanGet() {
        var Request = require("request");
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": "https://chercher.tech/sample/api/product/read?id=90"
    
            }, (error: any, response: any, body: any) => {
            if(error) {
                return console.dir(error);
            }
            console.dir("Body : ******");
            console.dir(JSON.parse(body));
    
            console.log("\n\n\nResponse Code ****:"+response.statusCode);
        
            });
    }

    async roepApiAanPost() {
        var Request = require("request");
        Request.post({
            "headers": { "content-type": "application/json" },
            "url": "https://api-atp.unive.nl/testzorgapi/aanvraag/zorgverzekering",
            "body": JSON.stringify({
                "regionaleUnive": {
                    "name": "Univé Regio+",
                    "intermediaryId": "0663",
                    "dienstwijzerPath": "/binaries/content/assets/pdfs/regio/unive-regioplus/zakelijk/dienstenwijzer.pdf/dienstenwijzer.pdf",
                    "dienstverleningsdocumentPath": "/binaries/content/assets/pdfs/regio/unive-regioplus/zakelijk/dvd_risicos_afdekken.pdf/dvd_risicos_afdekken.pdf",
                    "id": "502223bc-38ba-4e1d-8a09-98303d0fb9c4",
                    "location": "Heerhugowaard"
                },
                "ingangsDatum": "01-01-2021",
                "verzekeringsVerleden": "6",
                "oudeVerzekeringOpheffen": "true",
                "inkomstenBuitenland": "false",
                "contactGegevens": {
                    "emailadres": "infoo@univee.nl",
                    "telefoonnummer": "0612345678",
                    "adres": {
                        "straat": "Wibergstraat",
                        "huisnummer": "2",
                        "postcode": "8017 GA",
                        "stad": "Zwolle"
                    }
                },
                "betaalGegevens": {
                    "betaaltermijn": "M",
                    "betaalwijze": "inc",
                    "bankrekeningnummer": "NL02 ABNA 0123 4567 89"
                },
                "verzekerden": [
                    {
                        "id": "1568182085159",
                        "is18": true,
                        "collectiefNummer": 0,
                        "type": "verzekeringsnemer",
                        "achternaam": "Scenarioeen",
                        "initialen": "T.",
                        "geboortedatum": "1987-01-02",
                        "geslacht": "man",
                        "bsn": "112137726",
                        "nationaliteit": "NL",
                        "verzekeringsSelectie": {
                            "eigenrisico": "0",
                            "productCode": "ZVSU",
                            "productOptieCodes": [
                                "UCAXF",
                                "UCTCO",
                                "UCTXT",
                                "UCAXB"
                            ]
                        }
                    }
                ]
            })
    
            }, (error: any, response: any) => {
            if(error) {
                return console.dir(error);
            }
            console.dir("Body : ******");
            console.dir(response.body);

            console.log("\n\nHeader ****:")
            console.log(response.headers)
            console.log(response.statusCode)
            });
    }
}