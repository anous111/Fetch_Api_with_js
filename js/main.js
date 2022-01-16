// Main Variables

let Input=document.getElementById('input');
let Button=document.getElementById('get-button');
let Data=document.getElementById('show-data');


Button.onclick =function(){
    getRepos();
}

function  getRepos(){
    if (Input==""){ // If Value Is Empty
        Data.innerHTML="<span>please Enter your username</span>";

    }else{
      fetch(`https://api.github.com/users/${Input.value}/repos`)
      .then((res)=>res.json())
      .then((repositories) => {

        // Empty The Container
        Data.innerHTML = '';
        // Loop On Repositories
      repositories.forEach(repo => {

        // Create The Main Div Element
        let mainDiv = document.createElement("div");

        // Create Repo Name Text
        let repoName = document.createTextNode(repo.name);

        // Append The Text To Main Div
        mainDiv.appendChild(repoName);

        // Create Repo URL Anchor
        let theUrl = document.createElement('a');

        // Create Repo Url Text
        let theUrlText = document.createTextNode("Visit");

        // Append The Repo Url Text To Anchor Tag
        theUrl.appendChild(theUrlText);
          // Add The Hypertext Reference "href"
          theUrl.href = `https://github.com/${Input.value}/${repo.name}`;

          // Set Attribute Blank
          theUrl.setAttribute('target', '_blank');
  
          // Append Url Anchor To Main Div
          mainDiv.appendChild(theUrl);
  
          // Create Stars Count Span
          let starsSpan = document.createElement("span");
  
          // Create The Stars Count Text
          let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);
  
          // Add Stars Count Text To Stars Span
          starsSpan.appendChild(starsText);
  
          // Append Stars Count Span To Main Div
          mainDiv.appendChild(starsSpan);
  
          // Add Class On Main Div
          mainDiv.className = 'repo-box';
  
          // Append The Main Div To Container
          Data.appendChild(mainDiv);
  
        });
  
      });

    }

}