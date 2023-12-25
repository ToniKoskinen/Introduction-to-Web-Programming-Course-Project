//Toni Koskinen
  //Credits
  //slider:https://www.w3schools.com/howto/howto_js_rangeslider.asp
  //how to use div:https://stackoverflow.com/questions/10451445/two-div-blocks-on-same-line
const getElectionData=async()=> {

  
 

let  jsonQuery={
    "query": [
      {
        "code": "Vuosi",
        "selection": {
          "filter": "item",
          "values": [
            "2021",
            "2017",
            "2012",
            "2008",
            "2004",
            "2000",
            "1996",
            "1992"
          ]
        }
      },
      {
        "code": "Alue",
        "selection": {
          "filter": "item",
          "values": [
            "000000",
            "011091",
            "021049",
            "021078",
            "021092",
            "021106",
            "021186",
            "021235",
            "021245",
            "021257",
            "021444",
            "021427",
            "021428",
            "021737",
            "021223",
            "021540",
            "021622",
            "021543",
            "021638",
            "021612",
            "021613",
            "021858",
            "022224",
            "022434",
            "022424",
            "022585",
            "022701",
            "022505",
            "022710",
            "022220",
            "022606",
            "022835",
            "022842",
            "022753",
            "022927",
            "023018",
            "023149",
            "023407",
            "023504",
            "023611",
            "023616",
            "023755",
            "030000",
            "031202",
            "031602",
            "031680",
            "031734",
            "031073",
            "031252",
            "031259",
            "031308",
            "031501",
            "031586",
            "031587",
            "031776",
            "031784",
            "031853",
            "032400",
            "032423",
            "032838",
            "032430",
            "032431",
            "032006",
            "032482",
            "032445",
            "032101",
            "032150",
            "032279",
            "032533",
            "032573",
            "032481",
            "032017",
            "032419",
            "032503",
            "032490",
            "032529",
            "032485",
            "032705",
            "032920",
            "032577",
            "032895",
            "032432",
            "032209",
            "033019",
            "033284",
            "033304",
            "033322",
            "033040",
            "033243",
            "033923",
            "033480",
            "033538",
            "033561",
            "033631",
            "033636",
            "033219",
            "033979",
            "033704",
            "033906",
            "033738",
            "033761",
            "033833",
            "033918",
            "040000",
            "041079",
            "041609",
            "041537",
            "041413",
            "041684",
            "041685",
            "041266",
            "041406",
            "042050",
            "042262",
            "042102",
            "042913",
            "042214",
            "042099",
            "042886",
            "042293",
            "043051",
            "043442",
            "043181",
            "043230",
            "043271",
            "043484",
            "043531",
            "043608",
            "043747",
            "043783",
            "043319",
            "060000",
            "061061",
            "061098",
            "061283",
            "061109",
            "061083",
            "061210",
            "061401",
            "061692",
            "061855",
            "061111",
            "061088",
            "061089",
            "061398",
            "061532",
            "061694",
            "062016",
            "062082",
            "062165",
            "062560",
            "062015",
            "063081",
            "063086",
            "063103",
            "063142",
            "063169",
            "063316",
            "063433",
            "063576",
            "063781",
            "063834",
            "063981",
            "070000",
            "071211",
            "071730",
            "071289",
            "071418",
            "071536",
            "071604",
            "071837",
            "071908",
            "071980",
            "071932",
            "071303",
            "072020",
            "072864",
            "072928",
            "072310",
            "072108",
            "072508",
            "072506",
            "072933",
            "072562",
            "072581",
            "072790",
            "072493",
            "072912",
            "072772",
            "072988",
            "072238",
            "072253",
            "072254",
            "073143",
            "073177",
            "073250",
            "073291",
            "073619",
            "073635",
            "073439",
            "073702",
            "073887",
            "073922",
            "073936",
            "080000",
            "810000",
            "820000",
            "081075",
            "081917",
            "081153",
            "081285",
            "081286",
            "081044",
            "081163",
            "081306",
            "081754",
            "081909",
            "081405",
            "081539",
            "081173",
            "081978",
            "081491",
            "081014",
            "081492",
            "081085",
            "081696",
            "081775",
            "081740",
            "081741",
            "081246",
            "081618",
            "082593",
            "082640",
            "082184",
            "082594",
            "082937",
            "083046",
            "083097",
            "083178",
            "083213",
            "083416",
            "083441",
            "083489",
            "083507",
            "083580",
            "083728",
            "083891",
            "083588",
            "083623",
            "083624",
            "083681",
            "083689",
            "083700",
            "083739",
            "083768",
            "083831",
            "083935",
            "090000",
            "910000",
            "920000",
            "091140",
            "091167",
            "091251",
            "091856",
            "091045",
            "091632",
            "091297",
            "091919",
            "091227",
            "091534",
            "091476",
            "091174",
            "091915",
            "091212",
            "092276",
            "092309",
            "092422",
            "092541",
            "092911",
            "092749",
            "092778",
            "093090",
            "093146",
            "093171",
            "093176",
            "093204",
            "093239",
            "093260",
            "093248",
            "093263",
            "093402",
            "093916",
            "093420",
            "093426",
            "093595",
            "093607",
            "093686",
            "093687",
            "093707",
            "093762",
            "093844",
            "093848",
            "093943",
            "093857",
            "093921",
            "093925",
            "100000",
            "101231",
            "101272",
            "101315",
            "101429",
            "101885",
            "101598",
            "101743",
            "101589",
            "101544",
            "101975",
            "101905",
            "101942",
            "102005",
            "102414",
            "102010",
            "102863",
            "102145",
            "102232",
            "102233",
            "102004",
            "102281",
            "102971",
            "102301",
            "102175",
            "102164",
            "102399",
            "102408",
            "102499",
            "103052",
            "103074",
            "103151",
            "103152",
            "103217",
            "103218",
            "103236",
            "103280",
            "103287",
            "103288",
            "103300",
            "103403",
            "103421",
            "103440",
            "103475",
            "103545",
            "103584",
            "103599",
            "103759",
            "103846",
            "103849",
            "103893",
            "103924",
            "103934",
            "103946",
            "103559",
            "103945",
            "103479",
            "103944",
            "103989",
            "110000",
            "111179",
            "111787",
            "111180",
            "111277",
            "112182",
            "112299",
            "112443",
            "112183",
            "112249",
            "112410",
            "112500",
            "112992",
            "112274",
            "112770",
            "112774",
            "113077",
            "113172",
            "113415",
            "113216",
            "113226",
            "113256",
            "113265",
            "113275",
            "113312",
            "113435",
            "113495",
            "113592",
            "113601",
            "113729",
            "113633",
            "113850",
            "113892",
            "113931",
            "120000",
            "121205",
            "121940",
            "121244",
            "121564",
            "121973",
            "121084",
            "121255",
            "121567",
            "121972",
            "121678",
            "121582",
            "121926",
            "122069",
            "122139",
            "122292",
            "122208",
            "122095",
            "122290",
            "122305",
            "122425",
            "122494",
            "122535",
            "122563",
            "122765",
            "122977",
            "123009",
            "123071",
            "123072",
            "123105",
            "123317",
            "123436",
            "123483",
            "123578",
            "123615",
            "123620",
            "123625",
            "123626",
            "123630",
            "123691",
            "123697",
            "123746",
            "123748",
            "123708",
            "123777",
            "123785",
            "123791",
            "123247",
            "123603",
            "123617",
            "123682",
            "123832",
            "123859",
            "123841",
            "123889",
            "130000",
            "131240",
            "131698",
            "131699",
            "131851",
            "132241",
            "132320",
            "132758",
            "133047",
            "133148",
            "133261",
            "133273",
            "133498",
            "133583",
            "133614",
            "133683",
            "133732",
            "133742",
            "133751",
            "133845",
            "133854",
            "133890",
            "133976",
            "050000",
            "051478",
            "053035",
            "053043",
            "053060",
            "053062",
            "053065",
            "053076",
            "053170",
            "053295",
            "053318",
            "053417",
            "053438",
            "053736",
            "053766",
            "053771",
            "053941"
          ]
        }
      },
      {
        "code": "Puolue",
        "selection": {
          "filter": "item",
          "values": [
            
            "03",
            "01",
            "04",
            "02",
            "06",
            "05",
            "07",
            "08",
            "09"
          ]
        }
      },
      {
        "code": "Tiedot",
        "selection": {
          "filter": "item",
          "values": [
            "osuus_aanista"
          ]
        }
      }
    ],
    "response": {
      "format": "json-stat2"
    }
  }
 
  const url2="https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin/kvaa/statfin_kvaa_pxt_12g3.px"
  const res=await fetch(url2, {
      method: "POST",
      body: JSON.stringify(jsonQuery)

  })
  if(!res.ok){
    return;
  }
  const data=await res.json()
  
  return(data)
}



if(document.readyState!== "loading"){
    console.log("Document is ready!");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function(){
        console.log("Document is ready after waiting!");
        initializeCode();
    })
}
function initializeCode(){

    async function getMaps(){
        //Mapdata
        const url1="https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326"
        const mapPromise=await fetch(url1);
        const mapdata=await mapPromise.json();
        //Electiondata
        let electiondata=await getElectionData()
        const parties=Object.values(electiondata.dimension.Puolue.category.label)
        let areas=Object.values(electiondata.dimension.Alue.category.label)
        let areaids=Object.values(electiondata.dimension.Alue.category.index)
        let years=Object.values(electiondata.dimension.Vuosi.category.label)
        let values=electiondata.value;
        //Slider settings
        const slider=document.getElementById("yearRange")
        slider.min="0"
        slider.max=(years.length-1).toString()
        slider.oninput=function(){
          
        }
        //Copy partynames
        let partnames=parties.slice();
        partnames[2]="KESK"
        partnames[5]="VAS"
        //KOK, SDP, KESK, PS, VIHR, VAS, RKP, KD, Liike
        const colors=['#006288','#f54b4b','#006400','#FEDD00','#61bf1a','#f00a64','#ffdd93','#0135a5','#D9027D']
        //Election data for each municipality
        areas.forEach((area,index1)=>{
            
            partsinArea=[]
            parties.forEach((party,index2)=>{
                let partySupport=[]
                for(let i=0; i<years.length; i++){
                   
                    partySupport.push(values[i*9*areaids.length+9*areaids[index1]+index2])
                }
                
                parties[index2]={
                    name: partnames[index2],
                    values: partySupport,
                    color: colors[index2]
                }
                
            })

            areas[index1]={
                name: area,
                parts: parties.slice()
            }
            
        })
        
        
        //Add electiondata to mapdata
        areas.forEach((area) => {
          //Parse name
          let tmpstr1=area.name.split(" ")
          for (i=0;i<mapdata.features.length;i++){
            let tmpstr2=mapdata.features[i].properties.nimi.split(" ")
            if (tmpstr2[0]==tmpstr1[1]){
              mapdata.features[i].properties.elecdata=area
              break;
            }
          }

        })
        
        initMap(mapdata,years)
        
    }

    getMaps()
    
    
    
}
const initMap = (data,labels) => {
    let slider=document.getElementById("yearRange")
    let text=document.getElementById("year")
    const button=document.getElementById("add-data")
    text.innerHTML="Municipal elections in "+labels[labels.length-1]

  //Building the map
    let map=L.map("map",{
      minZoom: 5,
      maxZoom: 10
    })
    let geoJSON=L.geoJSON(data,{
        onEachFeature: getFeature,
        style: getStyle
    })
    geoJSON.addTo(map)
    let osm=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {maxZoom: 19,
       attribution: "© OpenStreetMap"}).addTo(map);
    map.fitBounds(geoJSON.getBounds())
  

    //Chart based on a municipality
    geoJSON.eachLayer(function(layer){
      if (layer.feature.properties.elecdata==undefined){
        
        return
      }
      let eldata=layer.feature.properties.elecdata.parts
      
       layer.on("click",function(){
        const chartData={
          labels: labels,
          datasets: eldata
        }
        
        let colors=[]
        for (let i=0; i<eldata.length;i++){
          colors.push(eldata[i].color)
        }
        
        const chart=new frappe.Chart("#chart",{
          title: "Municipal elections in "+layer.feature.properties.name,
          data: chartData,
          type: "line",
          height: 450,
          colors: colors
        })
        button.addEventListener("click",function(){
        chart.update(chartData)
        })
      })
      
    })

    slider.oninput=function(){ //Switch election year
      text.innerHTML="Municipal elections in "+labels[slider.value]
      geoJSON.eachLayer(function(layer){
        changeStyle(layer,slider)})
    }
    //Add predictions
    button.addEventListener("click",function(){
      geoJSON.eachLayer(function(layer){
        if (layer.feature.properties.elecdata==undefined){
          
          return
        }
        let eldata=layer.feature.properties.elecdata.parts
        for (let i=0; i<eldata.length; i++){
          let newvalue=0
          let values=eldata[i].values
          for (let j=1;j<values.length;j++){
            newvalue+=values[j]-values[j-1]
          }
          newvalue/=(values.length-1)
          newvalue+=values[values.length-1]
          if (newvalue<0){
            values.push(0)
          } else {
          values.push(parseInt(newvalue.toFixed(1)))
          }
          eldata[i].values=values.slice()
        }
        layer.feature.properties.elecdata.parts=eldata.slice()
        changeStyle(layer,slider)
      })
      labels.push((parseInt(labels[labels.length-1])+4).toString()+"(EST.)")
      slider.max=(labels.length-1).toString()
      slider.value=slider.max
      text.innerHTML="Municipal elections in "+labels[slider.value]

      
    })
}
const getFeature= (feature, layer) => {
    if (!feature.properties.name) return;
    const name=feature.properties.name;
    layer.bindTooltip(name);
    let slider=document.getElementById("yearRange")
    let eldata=feature.properties.elecdata.parts;
    eldata.sort((a,b)=> {
      if (a.values[slider.value]<b.values[slider.value]){
        return 1;
      }
      if (a.values[slider.value]>b.values[slider.value]){
        return -1;
      }
      return 0;
    })
   

}
const getStyle=(feature,layer)=> {
    let slider=document.getElementById("yearRange")
        
    if (feature.properties.elecdata==undefined){
      
      return
    }
    let eldata=feature.properties.elecdata.parts
    let largestprop=0
    
    
    let color="#808080";//grey color, if the largest prop is not possible to define
    
    for (let i=0; i<eldata.length;i++){
      if (eldata[i].values[slider.value]>largestprop){
        largestprop=eldata[i].values[slider.value]
        color=eldata[i].color;
        
      }
    }

    return {fillColor: color,color: color,fillOpacity: 0.30}
    


}
function changeStyle(layer,slider){
  if (layer.feature.properties.elecdata==undefined){
          
    return
  }
  let eldata=layer.feature.properties.elecdata.parts
  let largestprop=0
  

  let color="#808080";//grey color, if largest prop is not possible to define
  
  for (let i=0; i<eldata.length;i++){
    if (eldata[i].values[slider.value]>largestprop){
      largestprop=eldata[i].values[slider.value]
      color=eldata[i].color;
      
    }
  }
  layer.setStyle({fillColor: color,color: color})
}
