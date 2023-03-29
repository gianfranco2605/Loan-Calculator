const formatMoney = (valore) => {
    const formatter = new Intl.NumberFormat("it-IT", {
        style:"currency",
        currency: 'EUR'
    });

    return formatter.format(valore)

}

const calcolareTotaleDaPagare = (quantita, rate) => {

    let totale;

    //PIU QUANTITA, MENO INTERESSI
    if(quantita < 5000) {
        totale = quantita * 1.5
    }else if(quantita >= 5000){
        totale = quantita * 1.4
    }else if(quantita >= 10000 && quantita < 15000){
        totale = quantita * 1,3;
    }else {
        totale = quantita * 1.2

    }

    //rate, piu rate piu interessi

    if(rate === 6) {
        totale *= 1.1;
    }else if(rate ===12){
        totale *= 1.2;
    }else { 
        totale *= 1,3;
    }

    return totale;

}

export {
    formatMoney,
    calcolareTotaleDaPagare
}