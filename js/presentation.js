
Highcharts.chart('analystfirm', {
	    title: {
	        text: 'Within Analyst-Firm Variation (Hughes-HD)'
	    },
plotOptions: {
			series: {
				marker: {enabled: false},
				animation: {duration: 2000},
				states: {
					hover: { enabled: false }
				}
			}
		},
			    credits: {
	        enabled: false
    },
        xAxis: {
          tickInterval: 3 * 30 * 24 * 3600 * 1000,
            type: 'datetime'
    },

	yAxis: {
	        title: {
	            enabled: true,
	            text: 'Relative Value (%)',
	            style: {
	                fontWeight: 'normal'
	            }
	        }
    },


    series: [{ name: 'Local Car Counts Differentials',
        data: [
            [Date.UTC(2013,9,1), 26.0],
            [Date.UTC(2014,0,1), 48.9],
            [Date.UTC(2014,3,1), 80.4],
            [Date.UTC(2014,6,1), 41],
      		[Date.UTC(2014,9,1), 57],
      		[Date.UTC(2015,0,1), 34.8],
            [Date.UTC(2015,3,1), 52.1],

        ]
    }]
});



Highcharts.chart('analystfirm2', {
	    title: {
	        text: 'Within Analyst-Firm Variation (Hughes-HD)'
	    },
plotOptions: {
			series: {
				marker: {enabled: false},
				animation: {duration: 2000},
				states: {
					hover: { enabled: false }
				}
			}
		},
			    credits: {
	        enabled: false
    },
        xAxis: {
          tickInterval: 3 * 30 * 24 * 3600 * 1000,
            type: 'datetime'
    },
yAxis: {
	        title: {
	            enabled: true,
	            text: 'Relative Value (%)',
	            style: {
	                fontWeight: 'normal'
	            }
	        }
    },


    series: [{ name: 'Local Car Counts Differentials',
        data: [
            [Date.UTC(2013,9,1), 26.0],
            [Date.UTC(2014,0,1), 48.9],
            [Date.UTC(2014,3,1), 80.4],
            [Date.UTC(2014,6,1), 41],
      		[Date.UTC(2014,9,1), 57],
      		[Date.UTC(2015,0,1), 34.8],
            [Date.UTC(2015,3,1), 52.1],

        ]
    },
    {  name: 'Analyst Forecast Error',
        data: [
            [Date.UTC(2013,9,1), -14.6],
            [Date.UTC(2014,0,1), -5.7],
            [Date.UTC(2014,3,1), 5.2],
            [Date.UTC(2014,6,1), -10.5],
      		[Date.UTC(2014,9,1), 2.4],
      		[Date.UTC(2015,0,1), -15.2],
            [Date.UTC(2015,3,1), -3.7],

        ]
    }]
});



Highcharts.chart('forecasterror', {

	 plotAreaWidth: 300,
	  plotAreaHeight: 300,
	    title: {
	        text: ''
	    },

	    credits: {
	        enabled: false
    },
        xAxis: {
          tickInterval: 1,
          title: {
		          text: "Number of Unique MSAs"}
    },
    yAxis: {
	          title: {
        text: "Consensus Forecast Error"}
    },


    series: [{ name: 'Low (1-4)',
        data: [
           [1,0.319829],
		   [2,0.294407],
		   [3,0.282841],
[4,0.256566]

        ]
    },
    {  name: 'Mid (5-8)',
        data: [
        [1,0.254127],
		[2,0.234024],
		[3,0.239736],
		[4,0.234877],
		[5,0.233688],
		[6,0.214544],
		[7,0.176372]

        ]
    },
    {  name: 'High (More than 8)',
        data: [
[1,0.227546],
[2,0.222351],
[3,0.212473],
[4,0.20671],
[5,0.200802],
[6,0.178323],
[7,0.154113]

        ]
    }]
});