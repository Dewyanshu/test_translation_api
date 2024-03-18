const express = require('express');
const router = express.Router();

const shortestPath = {
    shortestPostRoute: (req, res) => {
        try {
            if (Object.keys(req.body).length == 0) { throw { status: 404, msg: 'Data not found' }; }
            let reqKeys = Object.keys(req.body);
            for (let key in reqKeys) {
                if (!(reqKeys[key].codePointAt(0) >= 65 && reqKeys[key].codePointAt(0) <= 73)) {
                    throw { status: 404, msg: 'Invalid Request data please send value between A to I only.' };
                }
            }
            let wareHouse = {
                c1: {
                    A: 3,
                    B: 2,
                    C: 8
                },
                c2: {
                    D: 12,
                    E: 25,
                    F: 15
                },
                c3: {
                    G: 0.5,
                    H: 1,
                    I: 2
                }
            }
            let distance = {
                c1_l1: 3,
                c2_l1: 2.5,
                c3_l1: 2,
                c1_c2_l1: 6.5,
                c2_c3_l1: 5,
                c1_c3_l1: 7,
                c1_c2_c3_l1: 9
            }
            let totalWeight = {
                initial: 10,
                additional: 8
            }
            const { A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0 } = req.body;
            let center1 = 0, center2 = 0, center3 = 0;
            if (A != 0 || B != 0 || C != 0) { center1 = 1; }
            if (D != 0 || E != 0 || F != 0) { center2 = 1; }
            if (G != 0 || H != 0 || I != 0) { center3 = 1; }
            let minDistance = 0;
            let weightCenter1 = (A*wareHouse['c1']['A'] + B*wareHouse['c1']['B'] + C*wareHouse['c1']['C']);
            let weightCenter2 = (D*wareHouse['c2']['D'] + E*wareHouse['c2']['E'] + F*wareHouse['c2']['F']);
            let weightCenter3 = (G*wareHouse['c3']['G'] + H*wareHouse['c3']['H'] + I*wareHouse['c3']['I']);
            let cost_c1 = totalWeight['initial'], cost_c2 = totalWeight['initial'], cost_c3 = totalWeight['initial'];
            let weight_c1 = weightCenter1/5, weight_c2 = weightCenter2/5, weight_c3 = weightCenter3/5;
            
            for(let i = 1; i < weight_c1; i++){ cost_c1 += totalWeight['additional']; }
            for(let i = 1; i < weight_c2; i++){ cost_c2 += totalWeight['additional']; }
            for(let i = 1; i < weight_c3; i++){ cost_c3 += totalWeight['additional']; }

            if (center1 && center2 && center3) { minDistance = cost_c1*4 + cost_c2*3 + cost_c3*2; }
            else if (center1 && center2) { minDistance = cost_c1*4 + cost_c2*2.5; }
            else if (center2 && center3) { minDistance = cost_c2*3 + cost_c3*2; }
            else if (center1 && center3) { minDistance = cost_c1*3 + totalWeight['initial']*2 + cost_c3*2; }
            else if (center1) { minDistance = cost_c1*3; }
            else if (center2) { minDistance = cost_c2*2.5; }
            else if (center3) { minDistance = cost_c3*2; }
            res.status(200).send({ 'Minimum cost': minDistance });
        } catch (err) {
            if (err.status && err.msg) res.status(err.status).send(err.msg);
            else res.status(404).send({ 'Error Found': err.message });
        }
    }
}

router.post('/calculateLowestCost', shortestPath.shortestPostRoute);

module.exports = router;