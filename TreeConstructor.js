  
function TreeConstructor(str) {
    const elementosA = str
        .map(i => i
            .replace(/[\(\)]/, '')
            .split(',')
            .map(i => parseInt(i))
        );

    const nodosHijos = elementosA.map(i => i[0]);
    const nodosPadres = elementosA.map(i => i[1]);
    return ! (('_' + nodosPadres.sort().join('_') + '_').match(/(_\d+)\1\1_/)
        || ('_' + nodosHijos.sort().join('_') + '_').match(/(_\d+)\1_/));
}
console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));