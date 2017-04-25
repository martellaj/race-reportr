fs = require('fs');

(function() {
    const data = JSON.parse(fs.readFileSync('./src/data/dumps/04242017.json', 'utf8'));

    const loadData = parseLoads(data.loads);
    const reportsData = parseReports(data.reports);

    console.log(`Number of loads: ${loadData.totalCount}`);
    console.log(`Number of reports: ${reportsData.totalCount}`);
})();

/**
 * Parses load data.
 * @param rawLoads Load data as object.
 * @returns Object with data summary.
 */
function parseLoads(rawLoads) {
    // Convert object to array.
    const loads = [];
    Object.keys(rawLoads).map(function(key, index) {
        loads.push(rawLoads[key]);
    });

    // Create map of dates and visits per date.
    const datesVisited = [];
    for (const load in loads) {
        const date = new Date(loads[load]).getTime();

        if (datesVisited[date]) {
            datesVisited[date]++;
        } else {
            datesVisited[date] = 1;
        }
    }

    return {
        totalCount: loads.length,
        datesVisited: datesVisited.sort()
    };
}

/**
 * Parses report data.
 * @param rawReports Reports data as object.
 * @returns Object with data summary.
 */
function parseReports(rawReports) {
    // Convert object to array.
    const reports = [];
    Object.keys(rawReports).map(function(key, index) {
        reports.push(rawReports[key]);
    });

    // Sort reports array.
    reports.sort((a, b) => {
        if (a.date.value < b.date.value) {
            return -1;
        } else if (a.date.value > b.date.value) {
            return 1;
        } else if (a.location.value < b.location.value) {
            return -1;
        } else if (a.location.value > b.location.value) {
            return 1;
        } else if (a.name.value < b.name.value) {
            return -1;
        } else if (a.name.value > b.name.value) {
            return 1;
        } else {
            return 0;
        }
    });

    // Dedupe the reports array.
    const deduped = [];
    let last;
    for (report of reports) {
        if (!last) {
            deduped.push(report);
        } else {
            if (!(report.date.value === last.date.value &&
                report.distance.value === last.distance.value &&
                report.location.value === last.location.value &&
                report.name.value === last.name.value &&
                report.website.value === last.website.value)) {
                    deduped.push(report);
                }
        }

        last = report;
    }

    return {
        totalCount: deduped.length
    };
}

