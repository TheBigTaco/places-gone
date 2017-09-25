function Place(country, landmark, year, language) {
  this.countryInput = country;
  this.landmarkInput = landmark;
  this.yearInput = year;
  this.languageInput = language;
}

Place.prototype.combination = function() {
  return this.countryInput + " " + this.landmarkInput + " " + this.yearInput + " " + this.languageInput;
}

$(document).ready(function(){
  $(".places").submit(function(event){
    event.preventDefault();
    var country = $("#country").val();
    var landmark = $("#landmarks").val();
    var year = $("#year").val();
    var language = $("#language").val();

    var combine = new Place(country, landmark, year, language);

    $("#output").append("<li><span class='placesGone'>" + combine.combination() + "</span></li>")

    $("#country").val("");
    $("#landmarks").val("");
    $("#year").val("");
    $("#language").val("");

    $(".placesGone").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(combine.countryInput);
      $(".country").text(combine.countryInput);
      $(".landmark").text(combine.landmarkInput);
      $(".year").text(combine.yearInput);
      $(".language").text(combine.languageInput);
    });
  });
});
