function inverte<H, M>(hPref: Map<H, M[]>): Map<H, M[]> {
    const iPref = new Map<H, M[]>();
    for (const [h, ms] of hPref)
        iPref.set(h, [...ms].reverse());
    return iPref;
}

function estavel<H, M>(hPref: Map<H, M[]>, 
                       mPref: Map<M, H[]>): Map<M, H> {
    function prefere(mulher: M, homem: H, namorado: H): boolean {
        for (const h of mPref.get(mulher)!)
            if (h == homem) return true;
            else if (h == namorado) break;
        return false;
    }

    hPref = inverte(hPref);
    const namorados = new Map<M, H>();
    const solteiros = [...hPref.keys()];
    while (solteiros.length > 0) {
        const homem = solteiros.pop()!;
        const mulher = hPref.get(homem)!.pop()!;
        const namorado = namorados.get(mulher);
        if (namorado == undefined) { // mulher esta solteira 
            namorados.set(mulher, homem);
        } 
        else if (prefere(mulher, homem, namorado)) {
            namorados.set(mulher, homem);
            solteiros.push(namorado);
        } 
        else solteiros.push(homem);
    }
    return namorados;
                        
}

function teste_casamento() {
    const hPref = new Map<number, number[]>(
        [[1, [2, 3, 1, 4, 5]],
         [2, [2, 1, 4, 5, 3]],
         [3, [5, 2, 1, 4, 3]],
         [4, [1, 5, 2, 3, 4]],
         [5, [4, 1, 2, 3, 5]]]
    )

    const mPref = new Map<number, number[]>(
        [[1, [3, 2, 1, 4, 5]],
         [2, [4, 5, 3, 2, 1]],
         [3, [1, 2, 3, 4, 5]],
         [4, [3, 4, 1, 2, 5]],
         [5, [2, 1, 3, 4, 5]]]
    );

    console.log(estavel(hPref, mPref));
}

teste_casamento()
