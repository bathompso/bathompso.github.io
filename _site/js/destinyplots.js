nchar_plot_data = [
    "All", [100, 1000, '#fff'],
    {
        "1": ["1", [ 3, 99, '1 Character: 3% of Players'], {}],
        "2": ["2", [10, 99, '2 Characters: 10% of Players'], {}],
        "3": ["3", [87, 99, '3 Characters: 87% of Players'], {
            "HTW": ["HTW", [61.86, 99, 'Hunter/Titan/Warlock [82%]'], {}],
            "TWW": ["TWW", [2.50, 99, 'Titan/Warlock/Warlock [3%]'], {}],
            "HHH": ["HHH", [2.46, 99, '3x Hunter [3%]'], {}],
            "HHW": ["HHW", [5.10, 99, 'Hunter/Hunter/Warlock [7%]'], {}],
            "HWW": ["HWW", [4.31, 99, 'Hunter/Warlock/Warlock [5%]'], {}],
            "WWW": ["WWW", [1.64, 99, '3x Warlock [2%]'], {}],
            "TTT": ["TTT", [1.28, 99, '3x Titan [2%]'], {}],
            "HTT": ["HTT", [2.32, 99, 'Hunter/Titan/Titan [3%]'], {}],
            "TTW": ["TTW", [2.03, 99, 'Titan/Titan/Warlock [3%]'], {}],
            "HHT": ["HHT", [3.50, 99, 'Hunter/Hunter/Titan [5%]'], {}],
        }]
    }
];




function init_plots(){
    function nchar_count_function(d){ return d[1][0]; }
    function nchar_label_function(d){ return d[2]; }
    function nchar_legend_function(d){ if (d[2] == "All"){ return ""; } else { return d[4][2]; } }
    var nchar_color = d3.scale.category20c();
    function nchar_color_function(d) { return nchar_color(d[4][0]); }

    function count_function(d){ return d[1][0]; }
    function label_function(d){ return d[2]; }
    function legend_function(d){ if (d[2] == "All"){ return ""; } else { return d[2] + " " + d[4][1]; } }
    function color_function(d) { return d[4][2]; }

    d3.select(self.frameElement).style("height", "300px");
    init_plot("subclass",subc_plot_data,    count_function,color_function,label_function,legend_function,3);
    init_plot("race",race_plot_data,        count_function,color_function,label_function,legend_function,2);
    init_plot("nchar",nchar_plot_data,nchar_count_function,nchar_color_function,nchar_label_function,nchar_legend_function,3);
    init_plot("weap",   weap_plot_data,     count_function,color_function,label_function,legend_function,3);
    init_plot("exweap", exweap_plot_data,   count_function,color_function,label_function,legend_function,3);
    init_plot("exarmor",exarmor_plot_data,  count_function,color_function,label_function,legend_function,3);
}

window.onload = init_plots;
window.onresize = init_plots;


$(function () {
    $('#level_plot').highcharts({
        credits: { enabled: false },
        chart: { type: 'column' },
        title: { text: 'Level Breakdown' },
        xAxis: { categories: ['< 20','20','21','22','23','24','25','26','27','28','29','30','31','32'], title: { text: 'Light Level' } },
        yAxis: [{ min: 0, title: { text: '# of Guardians' } },
                { min: 0, title: { text: '# of Players' }, opposite: true }],
        tooltip: { enabled: false },
        legend: { layout: 'vertical', floating: true, verticalAlign: 'top', align: 'left', x: 70, y: 40 },
        plotOptions: { column: { pointPadding: 0, borderWidth: 0 } },
        series: [{ name: 'All Guardians', data: level_plot_data, yAxis: 0 },
                 { name: 'Players: Max Level', data: maxlv_plot_data, yAxis: 1 },
                 { name: 'Players: Min Level', data: minlv_plot_data, yAxis: 1 }]
    });
});

$(function () {
    $('#grimoire_plot').highcharts({
        credits: { enabled: false },
        colors: ['#56b567'],
        chart: { type: 'column' },
        title: { text: 'Grimoire Score' },
        xAxis: { min: 1300, title: {text: 'Grimiore' } },
        yAxis: { min: 0, title: { text: '# of Players' } },
        tooltip: { enabled: false },
        legend: { enabled: false },
        plotOptions: { column: { pointPadding: 0, borderWidth: 0 } },
        series: [{ data: grimoire_plot_data }]
    });
});

$(function () {
    $('#glimmer_plot').highcharts({
        credits: { enabled: false },
        colors: ['#6baed6'],
        chart: { type: 'column' },
        title: { text: 'Glimmer' },
        xAxis: { min: 1300, title: {text: 'Glimmer' } },
        yAxis: { min: 0, title: { text: '# of Players' }, opposite: true },
        tooltip: { enabled: false },
        legend: { enabled: false },
        plotOptions: { column: { pointPadding: 0, borderWidth: 0 } },
        series: [{ data: glimmer_plot_data }]
    });
});




