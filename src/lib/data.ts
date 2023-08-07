const docId = "154yvJQvUNWxqVT675ZHfxiQEGJfoseK7PqmOzoItIPU";
const sheetName = encodeURIComponent("Form Responses 1");
const docUrl = `https://docs.google.com/spreadsheets/d/${docId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`

const scoresMap = {
    "S": 1,
    "A": 2,
    "B": 3,
    "C": 4,
    "D": 5,
    "E": 6,
    "F": 7
};

// @ts-ignore a
function flipObject(obj) {
    return Object.keys(obj).reduce((ret, key) => {
        // @ts-ignore need any here
        ret[obj[key]] = key;
        return ret;
    }, {});
}

const scoresMapReverse = flipObject(scoresMap);

export async function fetch_data() {
    const data = {
        "S": [],
        "A": [],
        "B": [],
        "C": [],
        "D": [],
        "E": [],
        "F": []
    };
    
    await fetch(docUrl)
        .then(res => res.text())
        .then(text => {
            let raw_data: string[][] = text.split("\n").map(l => l.split(",").map(c => c.replaceAll('"', '')));
            raw_data = raw_data.map(r => r.slice(1)) 

            for (let i = 0; i < raw_data[0].length; i++) {
                const lang = raw_data[0][i];
                const scores: number[] = [];
  
                for (const val of raw_data) {
                    scores.push(scoresMap[val[i]]); 
                }

                const avg = scores.filter(s => !!s).reduce((x, y) => x + y, 0) / scores.length;
                // @ts-ignore I don't care
                const score = scoresMapReverse[Math.floor(avg)];
                // @ts-ignore see above
                
                data[score].push([lang, avg]);                
            }
        });

    for (const tier of Object.keys(data)) {
        data[tier].sort((a, b) => a[1] - b[1]);
    }
    
    return data;
}
