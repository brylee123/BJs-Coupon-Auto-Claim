javascript:(function() {
    var coupons = document.querySelectorAll("div[id^='card-'] > div > div.text-center.print-card-footer > div > button");
    var batchSize = 9;
    var currentBatch = 0;

    function processBatch() {
        var start = currentBatch * batchSize;
        var end = Math.min(start + batchSize, coupons.length);
        for (var i = start; i < end; i++) {
            coupons[i].click();
        }
        currentBatch++;
        if (currentBatch * batchSize < coupons.length) {
            setTimeout(processBatch, 1000); // Waits for 1 second before processing the next batch
        }
    }

    processBatch();
})();
