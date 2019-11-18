var cf = crossfilter(window.KDS_ATTENDEES);

var nameDim = cf.dimension(function (d) { return d.name; });
var speakerDim = cf.dimension(function (d) { return d.speaker; });
var companyDim = cf.dimension(function (d) { return d.company; });
var cityDim = cf.dimension(function (d) { return d.city; });
var countryDim = cf.dimension(function (d) { return d.country; });

var speakerGrp = speakerDim.group();
var companyGrp = companyDim.group();
var cityGrp = cityDim.group();
var countryGrp = countryDim.group();

var countSpeakers = cf.groupAll().value();

function ordering(d) {
  return countSpeakers - d.value + 1;
}

var colorRange1 = [ '#00967f' ];
var colorRange2 = [ colorRange1[0], d3.rgb( colorRange1[0] ).darker(0.5).toString() ];

var speakerChart = dc.pieChart('#speaker-chart')
  .dimension( speakerDim )
  .group( speakerGrp )
  .height(206)
  .width(350)
  .radius(100)
  .label(function (d) {
    return (d.key ? 'Speakers: ' : 'Attendees: ') + d.value;
  })
  .ordinalColors( colorRange2 )
;

var companyChart = dc.rowChart('#company-chart')
  .dimension( companyDim )
  .group( companyGrp )
  .height( companyGrp.size() * 40)
  .width(350)
  .margins({top:0, bottom:0, left:0, right:0})
  .label(function (d) {
    return d.key +': '+ d.value;
  })
  .ordinalColors( colorRange1 )
  .ordering( ordering )
;

var cityChart = dc.rowChart('#city-chart')
  .dimension( cityDim )
  .group( cityGrp )
  .height( cityGrp.size() * 40)
  .width(350)
  .margins({top:0, bottom:0, left:0, right:0})
  .label(function (d) {
    return d.key +': '+ d.value;
  })
  .ordinalColors( colorRange1 )
  .ordering( ordering )
;

var countryChart = dc.rowChart('#country-chart')
  .dimension( countryDim )
  .group( countryGrp )
  .height( countryGrp.size() * 40)
  .width(350)
  .margins({top:0, bottom:0, left:0, right:0})
  .label(function (d) {
    return d.key +': '+ d.value;
  })
  .ordinalColors( colorRange1 )
  .ordering( ordering )
;

var dataCount = dc.dataCount('#data-count')
  .dimension( cf )
  .group( cf.groupAll() )
  .html({
    all: '%total-count participants',
    some: '%total-count participants'
  })
;

var dataTable = dc.dataTable('#data-table')
  .dimension( nameDim )
  .group(function (d) {
    return d.speaker ? 'Speakers' : 'Attendees';
  })
  .columns([
      'name',
      'company',
      'city',
      'country'
  ])
  .size(500)
;

dc.renderAll();
