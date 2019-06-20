var gen1amount = 0, gen1price = 15, gen1baseprice = 15, credit = 0, cps = 0;
    function update(){
        click.onclick = function() {credit = credit + 1};
        generator1.onclick = function() {
        if (credit >= gen1price) {
            credit = credit - gen1price;
            gen1amount = gen1amount + 1;
            cps = cps + 1;
            gen1price = gen1baseprice * (Math.pow(1.15, gen1amount));
            };
        };
        credit = credit + (cps/60);
    };
    function draw(){
        creditPerSecond.value = cps.toFixed(0);
        creds.value = credit.toFixed(0);
        generator1.value = gen1price.toFixed(0);
        generator1amount.value = gen1amount.toFixed(0);
    };
    var mainloop = function() {update(), draw()}; 
    setInterval(mainloop, 16);
