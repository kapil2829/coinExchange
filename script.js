const fetchData = async (page,perPage) => {
    let response = await fetch(
      "https://rest.coinapi.io/v1/exchanges/icons/32?apikey=4F932B11-2DF5-47CA-863C-41549842EC37"
    );
  
    let data = await response.json();
    console.log("data", data);
  
    //document.getElementById('myimage')
  
    //get the element with the ID "my"
  
    const container = document.getElementById("myimage");
  container.style.display = "row"; 
  // container.style.width="900px"
  container.style.marginLeft="400px"
  
    container.innerHTML="";
    for (let i = 0; i < 10; i++) {
      const div = document.createElement("div");
      div.style.display = "flex"; // Set each div to display:flex
  div.style.marginTop = "50px";
      const img = document.createElement("img");
      //set the source (URL) of the image
      img.src = data[i].url;
      //create name
      img.style.marginRight = "500px";
      img.style.size="500px"
  
      const para = document.createElement("p");
      para.innerHTML = data[i].exchange_id;
  
      //Append the <img> element to the  container
  
      // container.appendChild(img);
      // container.appendChild(para);
      div.appendChild(img);
      div.appendChild(para);
      container.appendChild(div);
    }
   
  };
  fetchData(1,10);

  let currentPage = 1;
  const itemsPerPage = 5;
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  const loadMoreData = () => {
    const nextPage = currentPage + 1;
    fetchData(nextPage, itemsPerPage);
    currentPage = nextPage;
  };

  loadMoreBtn.addEventListener("click", loadMoreData);

  // Initial data load
  fetchData(currentPage, itemsPerPage);
 