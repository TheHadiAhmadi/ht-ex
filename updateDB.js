import fs from 'fs'

const dataSTR = fs.readFileSync('./data_v2.json', 'utf-8');
const data = JSON.parse(dataSTR);

const getTags = (d) => ({
	name: d.tag,
	description: d.description,
});

	// deprecated: d.BrowserCompatibility[d.tag].status.depracated,
	// experimental: d.BrowserCompatibility[d.tag].status.experimental,
	// standard_track: d.BrowserCompatibility[d.tag].status.standard_track

const getAttributes = (d) =>
	d.attributes.localAttributes.map((attr) => ({
		name: attr.name,
		description: attr.description,
		tag: d.tag
	}));
    
const getBC = d => {
    const features = Object.keys(d.BrowserCompatibility).filter(attr => attr !== d.tag);
    const browsers = Object.keys(d.BrowserCompatibility[d.tag].support);
    
    return [...browsers.map(b => {

        return features.map(feat => ({
            tag: d.tag,
            attribute: feat === d.tag ? null : feat,
            browser: b,
            supports: !!d.BrowserCompatibility[feat].support[b].version_added
        }))
    })]
}



import Minibase from './src/minibase-sdk.js'
import fetch from 'node-fetch'

const VITE_MB_APPNAME = 'html';
const VITE_MB_APIKEY = '05eIVHILUZS3v8Fe8z2ub7rpR0npKfQQ';

const minibase = new Minibase(VITE_MB_APPNAME, VITE_MB_APIKEY, {mode: 'online'});



// console.log("uploading...")
// Promise.all(data.map(async d => {
//     console.log('[ tags ] -> ' + d.tag);
//     return await minibase.insert('tags', getTags(d));
// }))
// console.log("upload finished");




// console.log("uploading...")
// Promise.all(data.map(async d => {
//     console.log('[ attributes ] -> ' + d.tag);
//     return getAttributes(d).map(async attr => {
//         console.log(`[ ${attr.name} ] `);
//         return await minibase.insert('attributes', attr);
//     })
// }))
// console.log("upload finished");



// console.log("uploading...")
// Promise.all(data.map(async d => {
//     console.log('[ bc ] -> ' + d.tag);
//     return getBC(d).flat(2).map(async bc => {
//         console.log(`[ ${bc.browser} - ${bc.tag} - ${bc.attribute} ] -> ${bc.supports} `);
//         return await minibase.insert('bc', bc);
//     })
// }))
// console.log("upload finished");

// console.log(await minibase.get('tags'))
