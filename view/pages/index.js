function Home() {
  const objectFilter = {
    funcao: {
      funcaoEscolhida: CheckBox,
    },
    infos: [
      {
        descricao: "Cell Phones",
        value: 1920,
      },
      {
        descricao: "Cell Phones",
        value: 1920,
      },
      {
        descricao: "Cell Phones",
        value: 1920,
      },
      {
        descricao: "Cell Phones",
        value: 1920,
      },
    ],
  };

  let Home = `
    
    <div class="ContainerHome">
      <div class="SubcontainerHome">
        <div class="Home">
        
        <div class="LateralMenu">
        
          <div class="Logo">

          </div>

          <div class="Folders">
              ${MenuItens("Dashboard", true, "folderClass", "openClass")}
              ${MenuItens("Analytics", true)}
          </div>
          
          
          <div class="OptionFolders">
              <div class="ContainerOptions">
              
              <div class="titleFolders">
                <p>apps</p>
              </div>

              ${MenuItens("Email", true)}
              ${MenuItens("Chat", true)}
              ${MenuItens("Todo", true)}
              ${MenuItens("Calendar", true)}


              </div>
          </div>


          <div class="OptionFolders">
              <div class="ContainerOptions">
              
              <div class="titleFolders">
                <p>ui elements</p>
              </div>

              ${MenuItens("Grid", true)}
              ${MenuItens("Colors", true)}
              ${MenuItens("Table", true)}
              ${MenuItens("Components", true)}


              </div>
          </div>






        </div>

        <div class="ContainerData">

          <div class="ToolsUsers">${ToolsUser()}</div>
          <div class="StepArea">${StepUser()}</div>
          <div class="OptionsArea">
          
              <div class="filters">


                <div class="TitleFilters">
                  <div> <p> Filters </p> </div>
                </div>

                <div class="optionsFilters">

                                      <!-- filter 1 -->
                                      <div class="containerCategoryFilter">

                                          <div class="titleFilter">
                                            <p>Multi Range</p>
                                          </div>

                                          <div class="optionsFilter">
                                            ${radioButton(
                                              "$10-$100",
                                              "valor",
                                              "10"
                                            )}
                                            ${radioButton(
                                              "$10-$100",
                                              "valor",
                                              "10"
                                            )}
                                            ${radioButton(
                                              "$10-$100",
                                              "valor",
                                              "10"
                                            )}        
                                          </div>

                                      </div>
                                      <!-- filter 2 -->
                                      <div class="containerCategoryFilter">

                                          <div class="titleFilter">
                                            <p>Slider</p>
                                          </div>

                                          <div class="optionsFilter">
                                            ${radioButton(
                                              "$10-$100",
                                              "2",
                                              "10"
                                            )}
                                          </div>

                                      </div>
                                      <!-- filter 3 -->
                                      <div class="containerCategoryFilter">

                                          <div class="titleFilter">
                                            <p>Category</p>
                                          </div>

                                          <div class="optionsFilter">
                                            ${CheckBox("Cell Phones", 1920)}
                                            ${CheckBox("Cell Phones", 1920)}
                                            ${CheckBox("Cell Phones", 1920)}
                                            ${CheckBox("Cell Phones", 1920)}
                                            ${CheckBox("Cell Phones", 1920)}
                                            ${CheckBox(
                                              "Cell Phones",
                                              1920
                                            )}        
                                          </div>

                                      </div>
                                      <!-- filter 4 -->
                                      <div class="containerCategoryFilter">

                                          <div class="titleFilter">
                                            <p>Brand</p>
                                          </div>

                                          <div class="optionsFilter">
                                            ${CheckBox("Cell Phones", 1920)}
                                            ${CheckBox("Cell Phones", 1920)}
                                            ${CheckBox("Cell Phones", 1920)}
                                            ${CheckBox("Cell Phones", 1920)}
                                            
                                          </div>

                                      </div>
                                      <!-- filter 5 -->
                                      <div class="containerCategoryFilter">

                                          <div class="titleFilter">
                                            <p>Rating</p>
                                          </div>

                                          <div class="optionsFilter">
                                            ${Ranking("& Up", 1120)}
                                            ${Ranking("& Up", 1120)}
                                            ${Ranking("& Up", 1120)}
                                          </div>

                                      </div>

                  
                </div>

                 <div class="buttoClearFilter icon">
                  <div>
                    <p> clear all filters </p>
                  </div>
                </div>
   

              </div>
          
          
              <div class="resultOptions">                
                        <div class="TitleResultOptions">
                          <div class="title"> <p> 7,618 results found </p> </div>
                          <div class="optionsView">
                            <div class="choiceFilter icon">
                              <select name="cars" id="cars">
                                  <option value="1">Default</option>
                                  <option value="2">type 2</option>
                                  <option value="3">type 3</option>
                                  <option value="4">type 4</option>
                              </select>
                            </div>
                            <div class="vizualizatoinTypeOne icon"></div>
                            <div class="vizualizatoinTypeTwo icon"></div>
                          </div>
                        </div>


                        <div class="searchBarResult">                
                          <input type="text" placeholder="Search Bar" />
                          <div class="icon"></div>
                        </div>
                        
                        
                        
                        <div class="itensResult">
                            ${Card(
                              "Apple Watch Series 4",
                              "Apple",
                              "Lorem Ipsum is simpl Lorem Ipsum is simpl Lorem Ipsum is simpl Lorem Ipsum is simpl Lorem Ipsum is simpl Lorem Ipsum is simpl Lorem Ipsum is simpl Lorem Ipsum is simpl"
                            )}
                            ${Card(
                              "Apple Watch Series 4",
                              "Apple",
                              "Lorem Ipsum is simpl"
                            )}
                            ${Card(
                              "Apple Watch Series 4",
                              "Apple",
                              "Lorem Ipsum is simpl"
                            )}                            
                        </div>
              </div>


          </div>
          
          
          
          
          
            <div class="PaginationArea"></div>
          </div>

        </div>
      </div>

    </div>
    `;

  return Home;
}
