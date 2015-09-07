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

var speakerChart = dc.pieChart('#speaker-chart')
  .dimension( speakerDim )
  .group( speakerGrp )
  .height(200)
  .width(200)
  .radius(90)
  .label(function (d) {
    return (d.key ? 'speaker ' : 'attendee ') + d.value;
  })
;

var speakerChart = dc.pieChart('#speaker-chart')
  .dimension( speakerDim )
  .group( speakerGrp )
  .height(200)
  .width(200)
  .radius(90)
  .label(function (d) {
    return (d.key ? 'speaker ' : 'attendee ') + d.value;
  })
;

var companyChart = dc.rowChart('#company-chart')
  .dimension( companyDim )
  .group( companyGrp )
  .height( companyGrp.size() * 40)
  .width(400)
  .label(function (d) {
    return d.key +': '+ d.value;
  })
;

var cityChart = dc.rowChart('#city-chart')
  .dimension( cityDim )
  .group( cityGrp )
  .height( cityGrp.size() * 40)
  .width(400)
  .label(function (d) {
    return d.key +': '+ d.value;
  })
;

var countryChart = dc.rowChart('#country-chart')
  .dimension( countryDim )
  .group( countryGrp )
  .height( countryGrp.size() * 40)
  .width(400)
  .label(function (d) {
    return d.key +': '+ d.value;
  })
;

var dataCount = dc.dataCount('#data-count')
  .dimension( cf )
  .group( cf.groupAll() )
  .html({
    all: '%filter-count speakers',
    some: '%filter-count speakers'
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
