function ToolsUser() {
  const ToolsUser = `

        <div class="UserArea">
        
            <div class="icons">
              <div class="checkIcon icon"></div>
              <div class="chatIcon icon"></div>
              <div class="messageIcon icon"></div>
              <div class="calendarIcon icon"></div>
              <div class="startIcon icon"></div>
            </div>
            <div class="user">
              <div class="language icon">
                <div><p>English</p></div>
              </div>
              <div class="alertIcon icon"></div>
              <div class="searchIcon icon"></div>
              <div class="userInfo icon">
                <div class="name">
                  <p>John Doe</p>
                  <span>Avaiable</span>
                </div>
                <div  class="avatar icon"></div>
              </div>
            </div>

        </div>

    `;
  return ToolsUser;
}

function StepUser() {
  const StepUser = `
  
  <div class="ContainerStep">
  
      <div class="TitleStep">
        <div class="title"><p>Card Actions</p></div>
        <div class="typeGrep"><div></div></div>
        <div class="steps">
        
            <div class="iconHome icon"></div>
            <div class="separator"></div>
            
        
        </div>
      </div>


      <div class="ConfigStep icon"></div>

  </div>

  `;
  return StepUser;
}

function Card(titulo, subtitulo, descricao) {
  const Card = `
  

  <div class="ContainerCard">
  
    <div class="InfosCards">
    
      <div class="image"></div>
      <div class="infos">
      


              <div class="titleCard">
                <div class="title"><p>${titulo}</p></div>
                <div class="subtitle">
                  <p>By</p> <span>${subtitulo}</span>
                </div>
              </div>
              <div class="textCard">
                <p>${descricao}</p>
              </div>
      
      
      
      </div>

    </div>
    
    <div class="OptionsCard">
    
      <div class="qualification">
          <div>
            <p>3,4</p>
            <div></div>
          </div>
      </div>
      <div class="price">
        <div class="numberPrice"><p> $399</p></div>
        <div class="freight">
          <div></div>
          <p>Free Shipping</p>
        </div>
      </div>
      <div class="wishList icon">
        <div></div>
        <p>wishlist</p>
      </div>
      <div class="AddCard icon">
        <div></div>
        <p>ADD TO CART</p>
      </div>
    
    </div>
  
  </div>

  `;

  return Card;
}

function CheckBox(nome, value) {
  const Checkbox = `
  
  <div class="ContainerCheckbox">
  
      <div class="checkName">
          <input type="checkbox" />
          <div>
            <p>${nome}</p>
          </div>
      </div>

      <div class="valueCheck">
        <p> ${value} </p>
      </div>
  
  </div>

  `;
  return Checkbox;
}

function radioButton(descricao, name, value) {
  const radio = `
  
  <div class="ContainerCheckbox">
  
    <label class="subcontainerCheckbox">${descricao}
      <input type="radio" checked="checked" name="${name}" value="${value}">
      <span class="checkmark"></span>
    </label>

  
  </div>

  `;
  return radio;
}

function Ranking(nome, value) {
  const Ranking = `
  
  <div class="ContainerRanking">
  
      <div class="listStars">
          <div class="stars">
            <div class="starIcon icon" onclick="checkStartRaking(this)"></div>
            <div class="starIcon icon" onclick="checkStartRaking(this)"></div>
            <div class="starIcon icon" onclick="checkStartRaking(this)"></div>
            <div class="starIcon icon" onclick="checkStartRaking(this)"></div>
            <div class="starIcon icon" onclick="checkStartRaking(this)"></div>           
          </div>
          <div class="textStars"> 
            <p>${nome}</p>
          </div>
      </div>

      <div class="valueRanking">
        <p> ${value} </p>
      </div>
  
  </div>

  `;
  return Ranking;
}

function RangeInput() {
  const range = `
  <div id="test-slider"></div>
  `;
  return range;
}

function CategoryFilter(title, data) {
  const CategoryFilter = `
  
  <div class="containerCategoryFilter">

  <div class="titleFilter">
    <p>${title}</p>
  </div>

  <div class="optionsFilter">
      <!--${radioButton("$10-$100", "valor", "10")}
      ${radioButton("$10-$100", "valor", "10")}
      ${radioButton("$10-$100", "valor", "10")}-->

      
  </div>

  </div>

  `;
  return CategoryFilter;
}

function MenuItens(nome, moreOptions, isFolder, isOpen) {
  const MenuItens = `
  
  <div class="ContainerMenuItens ${isFolder} icon">
  
      <div class="ItenMenuName">
          <div class="MenuItensIcon"></div>
          <div>
            <p>${nome}</p>
          </div>
      </div>

      
      ${
        moreOptions
          ? ` 
  <div class="IconMoreOptions ${isOpen}"></div>  
  `
          : `<div></div>`
      }

      
      

      
  
  </div>

  `;
  return MenuItens;
}
