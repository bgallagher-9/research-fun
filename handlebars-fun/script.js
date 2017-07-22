(function() {

  registerPartials();
  renderPage();
  renderDogs();

  function registerPartials() {
    // Handlebars.registerPartial('dog', $('#dog-template').html());
    Handlebars.registerPartial('dog', document.querySelector('#dog-template').innerHTML)
  }

  function renderPage() {
    var template =
      document.querySelector('#index-template').innerHTML,
      // $('#index-template').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled(window.language);

    $('#main').html(rendered);
    document.querySelector('#main').innerHTML = rendered;
    document.querySelector('#languageSwitch').addEventListener('click', function() {
      DogPack.switchLanguage();
    });
    // $('#languageSwitch').click(function() {
    //   DogPack.switchLanguage();
    // });
  }

  function renderDogs() {
    var template =
      document.querySelector('#dogs-template').innerHTML,
      // $('#dogs-template').html(),
        compiled = Handlebars.compile(template),
        filteredDogs = DogPack.getFilteredDogs(DogPack.dogs)
        rendered = compiled({
          dogs: DogPack.getPaginatedDogs(filteredDogs),
                language: window.language
        });
    document.querySelector('#theDogs').innerHTML = rendered;
    // $('#theDogs').html(rendered);
    attachDogButtons();
    renderPages(filteredDogs);
    renderScore();
    }

    function renderScore() {
      var template =
        document.querySelector('#score-template').innerHTML,
        // $('#score-template').html(),
          compiled = Handlebars.compile(template),
          rendered = compiled({
            dogs: DogPack.dogs,
            language: window.language
          });
      document.querySelector('#score').innerHTML = rendered;
      // $('#score').html(rendered);
      document.querySelector('#score').querySelector('small').addEventListener('click', function() {
        DogPack.clearDogs();
        window.location.href = '?' + Handlebars.helpers.getLanguageFilter(window.language.langId);
      });
      // $('#score').find('small').click(function() {
      //   DogPack.clearDogs();
      //   window.location.href = '?' + Handlebars.helpers.getLanguageFilter(window.language.langId);
      // });
    }

    function renderPages(dogs) {
      var template =
        document.querySelector('#page-template').innerHTML,
        // $('#page-template').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled({ dogs: dogs });
        document.querySelector('#pagination').innerHTML = rendered;
      // $('#pagination').html(rendered);
    }

    function attachDogButtons() {
      // document.querySelector('dog-button').addEventListener('click', function() {
      //   var id =
      // })
      $('.dog-button').click(function() {
        var id = $(this).closest('.dog-card').data('dog-id');
      DogPack.chooseDog(id);
      renderDogs()
      });
      $('.not-dog-button').click(function() {
        var id = $(this).closest('.dog-card').data('dog-id');
      DogPack.chooseNotDog(id);
      renderDogs()
      });
    }

})();
